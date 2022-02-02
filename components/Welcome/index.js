import styles from './index.module.scss';
import { useRouter } from 'next/router'
const Welcome = () => {
    const router = useRouter()
    return (
        <div className={styles.container}>
            <img className={styles.bg_banner} src='/images/bg_banner.png'/>
            <div className={styles.content}>
                <div className={styles.title}>Welcome to<br/>Lamar Odom's Metaverse</div>
                <div className={styles.subtitle}>I am happy to announce the launch of Lamar's Odom's Metaverse! It will be featuring my life as a professional athlete in the form of digital arts. The first launch is the LM Collection featuring 7,777 unique Lamar Odom NFTs for 0.0777 ETH each. There will be 7 exclusive LMs available, each comes with a signature of Lamar Odom. Exclusive LM holders are eligible for a 5 min video call session with Lamar Odom! Besides, a portion of the LM Collection proceeds will be donated to the Mamba and Mambacita Foundation, honoring Lamar's former teamate, Kobe Bryant and supporting younger athelets.  
                </div>
                <div className={styles.btn}>Coming soon</div>
            </div>
        </div>
    )
}
export default Welcome;