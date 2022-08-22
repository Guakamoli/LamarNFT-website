import React from 'react';
import Header from '../Header';
import Welcome from '../Welcome';

import NftContractType from './lib/NftContractType';
import { toast } from 'react-toastify';
import Whitelist from './lib/Whitelist.ts';
import CollectionStatus from './CollectionStatus.tsx';
import MintWidget from './MintWidget.tsx';
import CollectionConfig from '../../LamarNFT-contract/config/CollectionConfig.ts';
import NetworkConfigInterface from '../../LamarNFT-contract/lib/NetworkConfigInterface';
import { ethers, BigNumber } from 'ethers'
import { callbacks } from '../../libs/callbacks.ts';

const ContractAbi = require('../../LamarNFT-contract/artifacts/contracts/' + CollectionConfig.contractName + '.sol/' + CollectionConfig.contractName + '.json').abi;

interface Props {
}

interface State {
  userAddress: string|null;
  network: ethers.providers.Network|null;
  networkConfig: NetworkConfigInterface;
  totalSupply: number;
  maxSupply: number;
  maxMintAmountPerTx: number;
  tokenPrice: BigNumber;
  isPaused: boolean;
  loading: boolean;
  isWhitelistMintEnabled: boolean;
  isUserInWhitelist: boolean;
  merkleProofManualAddress: string;
  merkleProofManualAddressFeedbackMessage: string|JSX.Element|null;
  errorMessage: string|JSX.Element|null;
}

const defaultState: State = {
  userAddress: null,
  network: null,
  networkConfig: CollectionConfig.mainnet,
  totalSupply: 0,
  maxSupply: 0,
  maxMintAmountPerTx: 0,
  tokenPrice: BigNumber.from(0),
  isPaused: true,
  loading: false,
  isWhitelistMintEnabled: false,
  isUserInWhitelist: false,
  merkleProofManualAddress: '',
  merkleProofManualAddressFeedbackMessage: null,
  errorMessage: null,
};

class Dapp extends React.Component<Props, State> {
  contract!: NftContractType;

  private merkleProofManualAddressInput!: HTMLInputElement;
  // state: State;

  private pathname: String;

  constructor(props: Props) {
    super(props);

    this.state = defaultState;
    this.pathname = props.router.pathname;
  }

  componentDidMount = async () => {
    const afterCallback = () => {
      const canMint = !this.state.isPaused || (this.state.isWhitelistMintEnabled && this.state.isUserInWhitelist);
      // if (this.pathname === '/mint' && (!canMint || this.isNotMainnet())) {
      if (this.pathname === '/mint' && !canMint) {
        this.props.router.replace('/');
      }
    };

    callbacks.remove('initWallet');
    callbacks.add('initWallet', async () => {
      await this.initWallet({
        afterCallback,
      });
    });

    if(this.props.provider) {
      await this.initWallet({
        afterCallback,
      });
    }
  }

  async mintTokens(amount: number): Promise<void>
  {
    try {
      this.setState({loading: true});
      const transaction = await this.contract.mint(amount, {value: this.state.tokenPrice.mul(amount)});

      toast.info(<>
        Transaction sent! Please wait...<br/>
        <a href={this.generateTransactionUrl(transaction.hash)} target="_blank" rel="noopener">View on {this.state.networkConfig.blockExplorer.name}</a>
      </>);

      const receipt = await transaction.wait();

      toast.success(<>
        Success!<br />
        <a href={this.generateTransactionUrl(receipt.transactionHash)} target="_blank" rel="noopener">View on {this.state.networkConfig.blockExplorer.name}</a>
      </>);

      this.refreshContractState();
      this.setState({loading: false});
    } catch (e) {
      this.setError(e);
      this.setState({loading: false});
    }
  }

  async whitelistMintTokens(amount: number): Promise<void>
  {
    try {
      this.setState({loading: true});
      const transaction = await this.contract.whitelistMint(amount, Whitelist.getProofForAddress(this.state.userAddress!), {value: this.state.tokenPrice.mul(amount)});

      toast.info(<>
        Transaction sent! Please wait...<br/>
        <a href={this.generateTransactionUrl(transaction.hash)} target="_blank" rel="noopener">View on {this.state.networkConfig.blockExplorer.name}</a>
      </>);

      const receipt = await transaction.wait();

      toast.success(<>
        Success!<br />
        <a href={this.generateTransactionUrl(receipt.transactionHash)} target="_blank" rel="noopener">View on {this.state.networkConfig.blockExplorer.name}</a>
      </>);

      this.refreshContractState();
      this.setState({loading: false});
    } catch (e) {
      this.setError(e);
      this.setState({loading: false});
    }
  }

  private isWalletConnected(): boolean
  {
    return this.state.userAddress !== null;
  }

  private isContractReady(): boolean
  {
    return this.contract !== undefined;
  }

  private isSoldOut(): boolean
  {
    return this.state.maxSupply !== 0 && this.state.totalSupply >= this.state.maxSupply;
  }

  private isNotMainnet(): boolean
  {
    return this.state.network !== null && this.state.network.chainId !== CollectionConfig.mainnet.chainId;
  }

  private copyMerkleProofToClipboard(): void
  {
    const merkleProof = Whitelist.getRawProofForAddress(this.state.userAddress ?? this.state.merkleProofManualAddress);

    if (merkleProof.length < 1) {
      this.setState({
        merkleProofManualAddressFeedbackMessage: 'The given address is not in the whitelist, please double-check.',
      });

      return;
    }

    navigator.clipboard.writeText(merkleProof);

    this.setState({
      merkleProofManualAddressFeedbackMessage:
      <>
        <strong>Congratulations!</strong> <span className="emoji">🎉</span><br />
        Your Merkle Proof <strong>has been copied to the clipboard</strong>. You can paste it into <a href={this.generateContractUrl()} target="_blank">{this.state.networkConfig.blockExplorer.name}</a> to claim your tokens.
      </>,
    });
  }

  private goHome(): void {
    this.props.router.back();
  }

  render() {
    return (
      <>
        <div style={{background: '#000000'}}>
          <Header
            isWalletConnected={() => this.isWalletConnected()}
            connectWallet={() => this.connectWallet()}
            goHome={() => this.goHome()}
          />
          {
            (this.pathname !== '/mint') ? (
            <Welcome
              generateMarketplaceUrl={() => this.generateMarketplaceUrl}
              isWalletConnected={() => this.isWalletConnected()}
              connectWallet={() => this.connectWallet()}
              isSoldOut={() => this.isSoldOut()}
              isNotMainnet={() => this.isNotMainnet()}
              isPaused={this.state.isPaused}
              isWhitelistMintEnabled={this.state.isWhitelistMintEnabled}
              isUserInWhitelist={this.state.isUserInWhitelist}
              networkName={this.state.network?.name}
            />
          ) : (
                <div style={{ width: '100%', height:'100vh', display: 'flex', alignItems: 'center', }}>
                      <MintWidget
                        isWalletConnected={() => this.isWalletConnected()}
                        networkConfig={this.state.networkConfig}
                        maxSupply={this.state.maxSupply}
                        totalSupply={this.state.totalSupply}
                        tokenPrice={this.state.tokenPrice}
                        maxMintAmountPerTx={this.state.maxMintAmountPerTx}
                        isPaused={this.state.isPaused}
                        isWhitelistMintEnabled={this.state.isWhitelistMintEnabled}
                        isUserInWhitelist={this.state.isUserInWhitelist}
                        mintTokens={(mintAmount) => this.mintTokens(mintAmount)}
                        whitelistMintTokens={(mintAmount) => this.whitelistMintTokens(mintAmount)}
                        loading={this.state.loading}
                        isSoldOut={() => this.isSoldOut()}
                      />
              </div>
            )
          }
          
          { this.props.children }
          {/* <Footer /> */}
        </div>
      </>
    );
  }

  private setError(error: any = null): void
  {
    let errorMessage = 'Unknown error...';

    if (null === error || typeof error === 'string') {
      errorMessage = error;
    } else if (typeof error === 'object') {
      // Support any type of error from the Web3 Provider...
      if (error?.error?.message !== undefined) {
        errorMessage = error.error.message;
      } else if (error?.data?.message !== undefined) {
        errorMessage = error.data.message;
      } else if (error?.message !== undefined) {
        errorMessage = error.message;
      } else if (React.isValidElement(error)) {
        this.setState({errorMessage: error});

        return;
      }
    }

    this.setState({
      errorMessage: null === errorMessage ? null : errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1),
    });
  }

  private generateContractUrl(): string
  {
    return this.state.networkConfig.blockExplorer.generateContractUrl(CollectionConfig.contractAddress!);
  }

  private generateMarketplaceUrl(): string
  {
    return CollectionConfig.marketplaceConfig.generateCollectionUrl(CollectionConfig.marketplaceIdentifier, !this.isNotMainnet());
  }

  private generateTransactionUrl(transactionHash: string): string
  {
    return this.state.networkConfig.blockExplorer.generateTransactionUrl(transactionHash);
  }

  private async connectWallet(): Promise<void>
  {
    try {
      // 连接错误处理
      if(!await this?.props?.connectWallet()) { return; }
      const { provider } = this.props;
      await provider.request!({ method: 'eth_requestAccounts' });
      await this.initWallet();
    } catch (e) {
      this.setError(e);
    }
  }

  private async refreshContractState(): Promise<void>
  {
    this.setState({
      maxSupply: (await this.contract.maxSupply()).toNumber(),
      totalSupply: (await this.contract.totalSupply()).toNumber(),
      maxMintAmountPerTx: (await this.contract.maxMintAmountPerTx()).toNumber(),
      tokenPrice: await this.contract.cost(),
      isPaused: await this.contract.paused(),
      isWhitelistMintEnabled: await this.contract.whitelistMintEnabled(),
      isUserInWhitelist: Whitelist.contains(this.state.userAddress ?? ''),
    });
  }

  private async initWallet(options?: { beforeCallback?: any, afterCallback?: any }): Promise<void>
  {
    const { beforeCallback, afterCallback } = options || {};
    if (beforeCallback) {
      await beforeCallback();
    }

    const { library } = this.props;
    const accounts = await library.listAccounts();
    const network = await library.getNetwork();

    this.setState(defaultState);

    if (!accounts || !(accounts && accounts[0])) {
      if (afterCallback) {
        await afterCallback();
      }
      return;
    }

    const walletAccount = accounts[0];

    let networkConfig: NetworkConfigInterface;

    if (network.chainId === CollectionConfig.mainnet.chainId) {
      networkConfig = CollectionConfig.mainnet;
    } else if (network.chainId === CollectionConfig.testnet.chainId) {
      networkConfig = CollectionConfig.testnet;
    } else {
      this.setError('Unsupported network!');
      toast.error('Unsupported network!', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    this.setState({
      userAddress: walletAccount,
      network,
      networkConfig,
    });

    if (await library.getCode(CollectionConfig.contractAddress!) === '0x') {
      this.setError('Could not find the contract, are you connected to the right chain?');
      return;
    }

    this.contract = new ethers.Contract(
      CollectionConfig.contractAddress as string,
      ContractAbi,
      library.getSigner(),
    ) as NftContractType;

    await this.refreshContractState();

    if (afterCallback) {
      await afterCallback();
    }
  }
}

export default Dapp;