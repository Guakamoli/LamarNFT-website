import styles from './index.module.scss';
import icon_title from '../../images/icon_title.png';
import bg_kuang_1 from './bg_kuang_1.png'
import bg_kuang_2 from './bg_kuang_2.png'
import bg_kuang_3 from './bg_kuang_3.png'
import bg_kuang_4 from './bg_kuang_4.png'
const Roadmap = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.title}>Roadmap</div>
                <img src={icon_title} />
            </div>
            <div className={styles.content}>
                <div className={styles.red}></div>
                <div className={styles.green}></div>
                <div className={styles.step}>
                    <div className={`${styles.stepItem} ${styles.redRadius}`} style={{marginTop:'131px'}}>
                        <div className={styles.stepLeft}>
                            <img src={bg_kuang_1} />
                            <div className={styles.text}>
                                <div>
                                    Welcome to Lamar's Metaverse!
                                </div>
                            </div>
                        </div>
                        <div className={styles.textRight}>Episode&nbsp;1</div>
                    </div>
                    <div className={`${styles.stepItem} ${styles.redRadius}`} style={{marginTop:'314px'}}>
                        <div className={styles.stepRight}>
                            <img src={bg_kuang_1} />
                            <div className={styles.text}>
                                <div style={{fontSize:'20px'}}>
                                Stick with the ones that saw your potential when the whole world was counting you out<br/>
                                <div style={{fontWeight:'normal',marginTop:'15px'}}>A select amount of LM NFTs will be airdropped to our supporters, early adopters, community partners, & social media giveaways. </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.textLeft}>Episode&nbsp;2</div>
                    </div>
                    <div className={`${styles.stepItem} ${styles.greenRadius}`} style={{marginTop:'250px'}}>
                        <div className={styles.stepLeft}>
                            <img src={bg_kuang_3} />
                            <div className={styles.text}>
                                <div style={{fontSize:'20px'}}>
                                Rise from the Ashes - Official Sale<br/>
                                <div style={{fontWeight:'normal',marginTop:'15px'}}>Official launch on Torimi NFT  </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.textRight}>Episode&nbsp;3</div>
                    </div>
                    <div className={`${styles.stepItem} ${styles.greenRadius}`} style={{marginTop:'200px'}}>
                        <div className={styles.stepRight} style={{top:'-100px'}}>
                            <img src={bg_kuang_4} style={{width: '516px'}}/>
                            <div className={styles.text}>
                                <div>
                                Donate to charity publicly and Lamar live streaming on Discord to meet all Lamar NFT holders. Lamar will also announce the winner for the exclusive NFT and session 2 sneakpeak. 
                                <div style={{marginTop:'22px'}}>Exclusive NFT Design Owner: Have a 5 min video call with Lamar<br/>
Pricing: Official launch : 0.0777 ETH. </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.textLeft}>Episode&nbsp;4</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Roadmap;