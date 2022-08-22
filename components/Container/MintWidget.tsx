import { utils, BigNumber } from 'ethers';
import React from 'react';
import NetworkConfigInterface from '../../LamarNFT-contract/lib/NetworkConfigInterface';
import MintContent from '../MintContent';
import { toast } from 'react-toastify';

interface Props {
  networkConfig: NetworkConfigInterface;
  maxSupply: number;
  totalSupply: number;
  tokenPrice: BigNumber;
  maxMintAmountPerTx: number;
  isPaused: boolean;
  loading: boolean;
  isWhitelistMintEnabled: boolean;
  isUserInWhitelist: boolean;
  mintTokens(mintAmount: number): Promise<void>;
  whitelistMintTokens(mintAmount: number): Promise<void>;
  isSoldOut(): boolean;
  isWalletConnected(): boolean;
}

interface State {
  mintAmount: number;
}

const defaultState: State = {
  mintAmount: 1,
};

export default class MintWidget extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  private canMint(): boolean {
    return !this.props.isPaused || this.canWhitelistMint();
  }

  private canWhitelistMint(): boolean {
    return this.props.isWhitelistMintEnabled && this.props.isUserInWhitelist;
  }

  private incrementMintAmount(): void {
    if (this.props.loading) { return; }
    this.setState({
      mintAmount: Math.min(this.props.maxMintAmountPerTx, this.state.mintAmount + 1),
    });
  }

  private incrementMaxMintAmount(): void {
    if (this.props.loading) { return; }
    this.setState({
      mintAmount: this.props.maxMintAmountPerTx,
    });
  }

  private decrementMintAmount(): void {
    if (this.props.loading) { return; }
    this.setState({
      mintAmount: Math.max(1, this.state.mintAmount - 1),
    });
  }

  private async mint(): Promise<void> {
    if (this.props.loading) { return; }
    if(!this.canMint()) {
      if(this.props.isWhitelistMintEnabled) {
        toast.error(<>You are not included in the <strong>whitelist</strong>.</>, {
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

      toast.error(<>The contract is <strong>paused</strong>.</>, {
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
    if (!this.props.isPaused) {
      await this.props.mintTokens(this.state.mintAmount);

      return;
    }

    await this.props.whitelistMintTokens(this.state.mintAmount);
  }

  private isSaleOpen(): boolean
  {
    return (this.props.isWhitelistMintEnabled || !this.props.isPaused) && !this.props.isSoldOut();
  }

  render() {
    return (
      <>
        <MintContent
        loading={this.props.loading}
        tokenPrice={this.props.tokenPrice}
        networkConfig={this.props.networkConfig}
        maxSupply={this.props.maxSupply}
        totalSupply={this.props.totalSupply}
        maxMintAmountPerTx={this.props.maxMintAmountPerTx}
        isWhitelistMintEnabled={this.props.isWhitelistMintEnabled}
        isSaleOpen={() => this.isSaleOpen()}
        decrementMintAmount={() => this.decrementMintAmount()}
        incrementMintAmount={() => this.incrementMintAmount()}
        incrementMaxMintAmount={() => this.incrementMaxMintAmount()}
        isSoldOut={this.props.isSoldOut}
        mintAmount={this.state.mintAmount}
        mint={() => this.mint()}
        isWalletConnected={this.props.isWalletConnected}
        />
      </>
    );
  }
}
