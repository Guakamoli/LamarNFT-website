import styles from './index.module.scss';
const LMCollection = function() {
    return (
        <div className={styles.LMCollection}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.left_header}>Introducing The LM Collection</div>
                    <div className={styles.content}>
                        <div style={{marginBottom:'52px'}}>The very first launch from Lamar Odom's Metaverse is the LM Collection featuring 7,777 unique Lamar Odom NFTs. Each is unique and programmatically generated from over 200 possible assets, including expressions, apparels, eyewears and more. There will be 7 exclusive LMs available, each comes with a signature of Lamar Odom. Exclusive LM holders are eligiable for a 5 min video call session with Lamar Odom! All honey badgers are honeyed. But some are rarer than others! A portion of the LM Collection proceeds will be donated to the Mamba and Mambacita Foundation, honoring Lamar's former teamate, Kobe Bryant,and supporting younger athelets.</div>
                        <div>The LM by Lamar Odom is also your personal ticket to become a member of Lamar Odom's Metaverse. Members of Lamar Odom's Metaverse will have access to unique opportunities and experiences in future events.</div>
                    </div>
                </div>
                <div className={styles.right}>
                    <img src="./images/bg.png" />
                </div>
            </div>
            
        </div>
    )
};
export default LMCollection;