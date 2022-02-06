import styles from './index.module.scss';
const Footer = function() {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.left}>
                    Copyright © {new Date().getFullYear()}. All rights reserved Lamar Odom's Metaverse.
                </div>
                <div className={styles.right}>
                    <div className={styles.btn} onClick={() => window.location.href='https://discord.gg/crGTv3z8aH'}>DISCORD</div>
                    <div className={styles.btn} onClick={() => window.location.href='https://twitter.com/LamarOdomMeta'}>TWITTER</div>
                    <div className={styles.btn}>OPENSEA</div>
                    <div className={styles.btn} onClick={() => window.location.href='https://www.instagram.com/lamarodommeta'}>INSTAGRAM</div>
                </div>
            </div>
        </div>
    )
};
export default Footer;