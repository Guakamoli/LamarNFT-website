import styles from './index.module.scss';
import bg_lamaerodom from './bg_lamaerodom.png'
const Introduce = () => {
    return (
        <div className={styles.container}>
            <img className={styles.left} src={bg_lamaerodom} />
            <div className={styles.right}>
                <div className={styles.title}>What the hell is Lamar's Metaverse?</div>
                <div className={styles.subtitle}>
                <span style={{color:'white', fontWeight:'bold'}}>Lamar Odom</span> is a former American professional basketball player. As a member of the Los Angeles Lakers in the National Basketball Association (NBA), he won the NBA championships in 2009 and 2010 and was named the NBA Sixth Man of the Year in 2011. A NBA Icon, Lamar has reigned for more than a decade as an unparalleled force who has raised the bar as an professional basketball player and globally recognized innovator. 
                </div>
                <div className={styles.subtitle}>
                <span style={{color:'white', fontWeight:'bold'}}>Lamar Odom</span> Metavers will will be featuring his life as a professional athelete as well as his road to reborn in the form of digital arts inspired by the NFT movement. 
                </div>
                <div className={styles.subtitle}>
                <span style={{color:'white', fontWeight:'bold'}}>The first season</span> of the Lamar Odom Metaverse is the LM Collection featuring 7,777 unique LAMAR ODOM NFTs. Each is unique and programmatically generated from over 200 possible assets, such as expression, clothing, outfit, eyewear and more. There will be 7 exclusive LM available, each comes with a signature of Lamar Odom. Exclusive LM holders are eligiable for a 5 min video call session with Lamar Odom! All honey badgers are honeyed. But some are rarer than others!
                </div>
                <div className={styles.subtitle}>
                A portion of the LM Collection proceeds will be donated to the Mamba and Mambacita Foundation, honoring Lamar's former teamate, Kobe Bryant and supporting younger athelets.  
                </div>

            </div>
        </div>
    )
}
export default Introduce;