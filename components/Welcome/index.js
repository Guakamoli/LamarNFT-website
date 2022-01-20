import styles from './index.module.scss';
const Welcome = () => {
    return (
        <div className={styles.container}>
            <img className={styles.bg_banner} src='/images/bg_banner.png'/>
            <div className={styles.content}>
                <div className={styles.title}>Welcome to<br/>Lamar Odom's Metaverse</div>
                <div className={styles.subtitle}>The Lamar Odom Metaverse (LM) was jointly launched by Lamar Odom and Torimi NFT. The first season of the Lamar Odom Metaverse is the LM Collection featuring 7,777 unique LAMAR ODOM NFTs, as well as membership for Torimi NFT. Each LM is a unique digital collectible living on the Ethereum blockchain as ERC-721.
                </div>
                <div className={styles.btn}>MINT NOW</div>
            </div>
        </div>
    )
}
export default Welcome;