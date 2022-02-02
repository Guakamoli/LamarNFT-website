import styles from './index.module.scss';
const Introduce = () => {
    return (
        <div className={styles.container}>
            <img className={styles.left} src='/images/bg_lamaerodom.png' />
            <div className={styles.right}>
                <div className={styles.title}>What is Lamar Odom Metaverse?</div>
                <div className={styles.subtitle}>
                <span style={{color:'white', fontWeight:'bold'}}>Lamar Odom</span> is a former American professional basketball player. As a member of the Los Angeles Lakers in the National Basketball Association (NBA), he won the NBA championships in 2009 and 2010 and was named the NBA Sixth Man of the Year in 2011. A NBA Icon, Lamar has reigned for more than a decade as an unparalleled force who has raised the bar as an professional basketball player and globally recognized innovator.
                </div>
                <div className={styles.subtitle}>
                <div style={{ marginBottom:'14px' }}><span style={{color:'white', fontWeight:'bold'}}>Members of Lamar Odo</span>gain exclusive access to both virtual and physical experience including:</div>
                <span style={{color:'white', fontWeight:'bold',marginRight:'5px',lineHeight:'20px'}}>1.</span>Exclusive pre-sale acess to Lamar Odom's NFT release and other partner release.<br/>
                <span style={{color:'white', fontWeight:'bold',marginRight:'5px',lineHeight:'20px'}}>2.</span>Digital and physical collectibles from Lamar's orginal collection and some of the world's most famous IP.<br/>
                <span style={{color:'white', fontWeight:'bold',marginRight:'5px',lineHeight:'20px'}}>3.</span>Free NBA Tickets and chances to meet with players<br/>
                <span style={{color:'white', fontWeight:'bold',marginRight:'5px',lineHeight:'20px'}}>4.</span>Online members-only community events.<br/>
                <span style={{color:'white', fontWeight:'bold',marginRight:'5px',lineHeight:'20px'}}>5.</span>And more!
                </div>
                {/*<div className={styles.subtitle}>
                A portion of the LM Collection proceeds will be donated to the Mamba and Mambacita Foundation, honoring Lamar's former teamate, Kobe Bryant ，and supporting younger athelets.  
                </div>*/}

            </div>
        </div>
    )
}
export default Introduce;