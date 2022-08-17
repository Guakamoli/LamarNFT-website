import { utils, BigNumber } from 'ethers';
import React from 'react';
import NetworkConfigInterface from '../../LamarNFT-contract/lib/NetworkConfigInterface';
import MintContent from '../MintContent';

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
    this.setState({
      mintAmount: Math.min(this.props.maxMintAmountPerTx, this.state.mintAmount + 1),
    });
  }

  private incrementMaxMintAmount(): void {
    this.setState({
      mintAmount: this.props.maxMintAmountPerTx,
    });
  }

  private decrementMintAmount(): void {
    this.setState({
      mintAmount: Math.max(1, this.state.mintAmount - 1),
    });
  }

  private async mint(): Promise<void> {
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
        {this.canMint() ?
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
              mintAmount={this.state.mintAmount}
              mint={() => this.mint()}
              isWalletConnected={this.props.isWalletConnected}
             />
          // <div className={`mint-widget ${this.props.loading ? 'animate-pulse saturate-0 pointer-events-none' : ''}`}>
          //   <div className="preview">
          //     <img src="/build/images/preview.png" alt="Collection preview" />
          //   </div>

          //   <div className="price">
          //     <strong>Total price:</strong> {utils.formatEther(this.props.tokenPrice.mul(this.state.mintAmount))} {this.props.networkConfig.symbol}
          //   </div>

          //   <div className="controls">
          //     <button className="decrease" disabled={this.props.loading} onClick={() => this.decrementMintAmount()}>-</button>
          //     <span className="mint-amount">{this.state.mintAmount}</span>
          //     <button className="increase" disabled={this.props.loading} onClick={() => this.incrementMintAmount()}>+</button>
          //     <button className="primary" disabled={this.props.loading} onClick={() => this.mint()}>Mint</button>
          //   </div>
          // </div>
          :
          <div className="cannot-mint">
            <span className="emoji">⏳</span>

            {this.props.isWhitelistMintEnabled ? <>You are not included in the <strong>whitelist</strong>.</> : <>The contract is <strong>paused</strong>.</>}<br />
            Please come back during the next sale!
          </div>
        }
      </>
    );
  }
}
