import styles from "./index.module.scss";
import { utils } from "ethers";
export default function MintContent(props) {
  const {
    loading,
    decrementMintAmount,
    incrementMintAmount,
    mintAmount,
    mint,
    maxSupply,
    totalSupply,
    incrementMaxMintAmount,
    isWhitelistMintEnabled,
    isSaleOpen,
    isSoldOut: isSoldOutFunc,
  } = props;
  const isSoldOut = isSoldOutFunc();

  return (
    <div className={styles.container}>
      <img src="/images/productImg.png" style={{ width: "624px" }} />
      <div className={styles.rightContent}>
        <div className={styles.title}>
          Make sure to connect your Wallet before purchasing
        </div>
        <div className={styles.row}>
          <div className={styles.left}>Sale Status</div>
          <div className={styles.right}>
            {isSaleOpen() ? (
              <>{isWhitelistMintEnabled ? "Whitelist only" : "Open"}</>
            ) : (
              "Closed"
            )}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>Total sold</div>
          <div className={styles.right}>
            {totalSupply} of {maxSupply}
          </div>
        </div>
        <div className={styles.row} style={{ padding: "21px 0" }}>
          <div className={styles.left}>Amount</div>
          <div className={styles.right}>
            <div className={styles.num}>
              <div className={styles.operateBtn} onClick={decrementMintAmount}>
                -
              </div>
              <div
                style={{
                  color: "#68F9DC",
                  fontSize: "32px",
                  margin: "0 37px",
                }}
              >
                {mintAmount}
              </div>
              <div className={styles.operateBtn} onClick={incrementMintAmount}>
                +
              </div>
            </div>
            <div
              className={styles.gradientBtn}
              onClick={incrementMaxMintAmount}
            ></div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>Total amount</div>
          <div className={styles.right}>
            {utils.formatEther(props.tokenPrice.mul(mintAmount))}{" "}
            {props.networkConfig.symbol}
          </div>
        </div>
        <button
          className={`${styles.btn} ${
            isSoldOut ? styles.soldout : styles.normalbtn
          }`}
          disabled={isSoldOut}
          onClick={mint}
        >
          MINT NOW
        </button>
      </div>
    </div>
  );
}
