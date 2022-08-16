import styles from './index.module.scss'
export default function MintContent(props){
    const {
        loading,
        decrementMintAmount,
        incrementMintAmount,
        mintAmount,
        mint,
    } = props;
    return (
        <div className={styles.container}>
            <img src='/images/productImg.png' style={{width:'624px'}}/>
            <div className={styles.rightContent}>
                <div className={styles.title}>Make sure to connect your Wallet before purchasing</div>
                <div className={styles.row}>
                    <div className={styles.left}>Total sold</div>
                    <div className={styles.right}>0 of 7,777</div>
                </div>
                <div className={styles.row} style={{padding: '21px 0'}}>
                    <div className={styles.left}>mintAmount</div>
                    <div className={styles.right}>
                        <div className={styles.num}>
                            <div className={styles.operateBtn} onClick={decrementMintAmount}>-</div>
                            <div style={{
                                color:'#68F9DC',
                                fontSize:'32px',
                                margin: '0 37px'
                            }}>{mintAmount}</div>
                            <div className={styles.operateBtn} onClick={incrementMintAmount}>+</div>
                        </div>
                        <div className={styles.gradientBtn}></div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.left}>Total amount</div>
                    <div className={styles.right}>0.0777 ETH</div>
                </div>
                <div className={styles.btn} onClick={mint}>MINT NOW</div>
            </div>
        </div>
    )
}