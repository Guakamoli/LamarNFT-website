import styles from './index.module.scss';
const Roadmap = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.title}>Roadmap</div>
                <img src='/images/icon_title.png' />
            </div>
            <div className={styles.content}>
                <div className={styles.red}></div>
                <div className={styles.green}></div>
                <div className={styles.textBottom}>Phase 3 Metaverse</div>
                <div className={styles.bottom}>
                    <img src='/images/bg_kuang_5.png'/>
                    <div className={styles.text}>
                        <div>
                        - Reveal details on the social space we are building in the metaverse. The social space based on web 3.0 is only accessible to LM holders. A home for athletes and true sports fans like you<br/>
                        - Holders of LM NFT get lifetime access to the social space and will have their names put on the walls.<br/>
                        - Virtual basketball game with your friend in the social space arena. <br/>
                        - Virtual basketball game with your friend in the social space arena.<br/>
                        - Access members only events with a chance to meet your favorite NBA stars. <br/>
- Exclusive physical and digital merchandise for members to purchase<br/>
- Members of Lamar Odom's Metaverse social space have a chance to earn rewards and share revenues! <br/>
- And more!<br/>
<br/>
<br/>
{"Parts of the proceeds will also be donated to the Mamba & Mambacita Sports Foundation to honor Lamar's former teamate, Kobe Bryant, and support younger athletes."}</div>
                    </div>
                </div>
                <div className={styles.step}>
                    <div className={`${styles.stepItem} ${styles.redRadius}`} style={{marginTop:'131px'}}>
                        <div className={styles.stepLeft}>
                            <img src='/images/bg_kuang_1.png' />
                            <div className={styles.text}>
                                <div>
                                Welcome to Lamar's Metaverse! Join the Discord community and open a door to an exclusive metaverse world for sports fans!
                                </div>
                            </div>
                        </div>
                        <div className={styles.textRight}>Phase&nbsp;&nbsp;1&nbsp;&nbsp;Genesis</div>
                    </div>
                    <div className={`${styles.stepItem} ${styles.redRadius}`} style={{marginTop:'314px'}}>
                        <div className={styles.stepRight}>
                            <img src='/images/bg_kuang_1.png' />
                            <div className={styles.text}>
                                <div>
                                    {'Stick with the ones that saw your potential when the whole world was counting you out A select amount of LM NFTs will be air dropped to our supporters, early adopters, community partners, & social media giveaways.'}
                                </div>
                            </div>
                        </div>
                        <div className={styles.textLeft}>Phase&nbsp;&nbsp;2&nbsp;&nbsp;Community</div>
                    </div>
                    {/* <div className={`${styles.stepItem} ${styles.greenRadius}`} style={{marginTop:'250px'}}>
                        <div className={styles.stepLeft}>
                            <img src='/images/bg_kuang_3.png' />
                            <div className={styles.text}> 
                            <div>Rise from the Ashes - Pre-sale begins for MVP and FanClub members.</div> 
                            </div>
                        </div>
                        <div className={styles.textRight}>Episode&nbsp;3</div>
                    </div> */}
                    <div className={`${styles.stepItem} ${styles.greenRadius}`} style={{marginTop:'200px'}}>
                        <div className={styles.stepRight} style={{top:'-100px'}}>
                            {/*<img src='/images/bg_kuang_4.png' style={{width: '516px'}}/>*/}
                            {/*<div className={styles.text}>
                                <div>
                                Donate to charity publicly and Lamar live streaming on Discord to meet all Lamar NFT holders. Lamar will also announce the winners for the exclusive NFT and session 2 sneakpeak. 
                                <div style={{marginTop:'22px', fontWeight: 400}}>Exclusive NFT Design Owner: <br/>Have a 5 min video call with Lamar<br/>
Pricing:<br/> Official launch : 0.0777 ETH. </div>
                                </div>
                            </div>*/}
                        </div>
                        {/*<div className={styles.textBottom}>Episode&nbsp;4</div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Roadmap;