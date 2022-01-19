import styles from './index.module.scss';
const Footer = function() {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.left}>
                    Copyright © 2021. All rights reserved Torimi NFT. 
                </div>
                <div className={styles.right}>
                    <div className={styles.btn}>DISCORD</div>
                    <div className={styles.btn}>TWITTER</div>
                    <div className={styles.btn}>OPENSEA</div>
                </div>
            </div>
        </div>
    )
};
export default Footer;