import styles from './index.module.scss';
import { useRouter } from 'next/router'
const Welcome = () => {
    const router = useRouter()
    return (
        <div className={styles.container}>
            <img className={styles.bg_banner} src='/images/bg_banner.png'/>
            <div className={styles.content}>
                <div className={styles.title}>Welcome to<br/>Lamar Odom's Metaverse</div>
                <div className={styles.subtitle}>We are excited to announce Lamar's Metaverse, a community connecting the metaworld with real world! 
"Welcome to the community! I am happy to announce the launch of Lamar's Odom's Metaverse! It will be featuring my life as a professional athlete as well as my road to reborn in the form of digital arts inspired by the NFT movement. This will be a ongoing project that evolves over time and I want to create a loving and supporting community. One love!" - Lamar Odom
                </div>
                <div className={styles.btn}>Coming soon</div>
            </div>
        </div>
    )
}
export default Welcome;