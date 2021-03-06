import styles from './index.module.scss';
const Header = function() {
    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.left}>
                    <img src='/images/logo.png' className={styles.imgStyle} />
                </div>
                <div className={styles.right}>
                    <a href="https://discord.gg/crGTv3z8aH" target="_blank">
                        Discord
                    </a>
                    <a href="https://twitter.com/LamarOdomMeta" target="_blank">Twitter</a>
                    <a>OpenSea</a>
                    <a href="https://www.instagram.com/lamarodommeta" target="_blank">Instagram</a>
                    <div className={styles.gradientBtn}>
                        <img src='/images/bt_mint.png'/>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Header;