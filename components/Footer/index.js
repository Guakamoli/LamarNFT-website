import styles from './index.module.scss';
const Footer = function() {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.left}>
                    Copyright © {new Date().getFullYear()} All rights reserved Torimi NFT. 
                </div>
                <div className={styles.right}>
                    <div className={styles.btn} onClick={() => window.location.href='https://discord.gg/crGTv3z8aH'}>DISCORD</div>
                    <div className={styles.btn} onClick={() => window.location.href='https://twitter.com/Torimi_NFT'}>TWITTER</div>
                    <div className={styles.btn}>OPENSEA</div>
                    <div className={styles.btn} onClick={() => window.location.href='https://www.instagram.com/torimi_nft'}>INSTAGRAM</div>
                </div>
            </div>
        </div>
    )
};
export default Footer;