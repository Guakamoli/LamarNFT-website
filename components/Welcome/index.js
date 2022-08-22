import { useCallback, useEffect } from "react";
import styles from "./index.module.scss";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import CollectionConfig from "../../LamarNFT-contract/config/CollectionConfig.ts";

const Welcome = (props) => {
  const router = useRouter();
  const {
    connectWallet,
    isWalletConnected,
    isPaused,
    isWhitelistMintEnabled,
    isUserInWhitelist,
    isSoldOut,
    generateMarketplaceUrl,
    networkName,
    isNotMainnet,
  } = props;
  const walletConnected = isWalletConnected();
  const soldOut = isSoldOut();

  const canMint = () => {
    return !isPaused || canWhitelistMint();
  };

  const canWhitelistMint = () => {
    return isWhitelistMintEnabled && isUserInWhitelist;
  };

  const handleConnectWallet = useCallback(async () => {
    if (!isWalletConnected()) {
      connectWallet();
    }
  }, []);

  const handleMintPage = () => {
    router.push("/mint");
  };

  const renderPurchase = () => {
    if (soldOut) {
      return (
        <button
          disabled={true}
          className={`${styles.btn} ${styles.soldout}`}
          onClick={handleMintPage}
        >
          Sold out
        </button>
      );
    }
    if (canMint()) {
      return (
        <div
          className={`${styles.btn} ${styles.normalbtn}`}
          onClick={handleMintPage}
        >
          Next sale
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.container}>
      <img className={styles.bg_banner} src="/images/bg_banner.png" />
      <div className={styles.content}>
        <div className={styles.title}>
          Welcome to
          <br />
          Lamar Odom's Metaverse
        </div>
        <div className={styles.subtitle}>
          We are excited to announce Lamar's Metaverse, a community connecting
          the metaworld with real world! "Welcome to the community! I am happy
          to announce the launch of Lamar's Odom's Metaverse! It will be
          featuring my life as a professional athlete as well as my road to
          reborn in the form of digital arts inspired by the NFT movement. This
          will be a ongoing project that evolves over time and I want to create
          a loving and supporting community. One love!" - Lamar Odom
        </div>
        {walletConnected ? null : (
          <div className={styles.btn} onClick={handleConnectWallet}>
            Connect your wallet
          </div>
        )}
        {renderPurchase()}
        {isNotMainnet() ? (
          <div className={styles.network}>
            You are not connected to the main network.
            <span>
              Current network: <strong>{networkName}</strong>
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Welcome;
