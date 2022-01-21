import styles from './index.module.scss';
const Header = function() {
    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.left}>
                    <img src='/images/logo.png' className={styles.imgStyle} />
                </div>
                <div className={styles.right}>
                    <div>Discord</div>
                    <div onClick={() => window.location.href='https://twitter.com/Torimi_NFT'}>Twitter</div>
                    <div>OpenSea</div>
                    <div onClick={() => window.location.href='https://www.instagram.com/torimi_nft'}>Instagram</div>
                    <div className={styles.gradientBtn}>
                        <img src='/images/bt_mint.png'/>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Header;