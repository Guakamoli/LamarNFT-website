import styles from './index.module.scss';
const Footer = function() {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.left}>
                    Copyright © {new Date().getFullYear()}. All rights reserved Lamar Odom's Metaverse.
                </div>
                <div className={styles.right}>
                    <a className={styles.btn} target="_blank" href="https://discord.gg/crGTv3z8aH">DISCORD</a>
                    <a className={styles.btn} target="_blank" href="https://twitter.com/LamarOdomMeta">TWITTER</a>
                    <a className={styles.btn}>OPENSEA</a>
                    <a className={styles.btn} target="_blank" href="https://www.instagram.com/lamarodommeta">INSTAGRAM</a>
                </div>
            </div>
        </div>
    )
};
export default Footer;