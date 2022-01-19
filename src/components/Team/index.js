import styles from './index.module.scss';
import icon_title from '../../images/icon_title.png'
import ic_aoduomu from './ic_aoduomu.png'
import ic_NFT from './ic_NFT.png'
const Team = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.title}>Team</div>
                <img src={icon_title} />
            </div>
            <div className={styles.bottom}>
                <div className={styles.item}>
                    <img src={ic_aoduomu}/>
                    <span style={{fontSize:'40px',color:'#64FFDA',fontWeight:'bold'}}>Lamar Odom</span>
                </div>
                <div className={styles.item}>
                    <img src={ic_NFT}/>
                    <span style={{fontSize:'40px',color:'#B77EFF',fontWeight:'bold'}}>Torimi NFT</span>
                </div>
            </div>
            {/*<div className={styles.bottom}>
                <div className={styles.bottomContent}>
                    <img src={ic_aoduomu}/>
                    <div className={styles.subtitle}>Savvy Girl Consulting </div>
                    <div className={styles.detail}>
                        <div>These are the ladies who took me in, gave me a reality check, and work with me daily to rebuild myself daily as a man and a brand.</div> 
                        <div>They are the soft touch and hard punch. They have had to endure some stuff in managing me, but they never give up. </div>
                        <div>Torimi NFT- Newly established NFT company under Torimi JP - leading entertainment platform that I work with to make this project successful. </div>
                    </div>
                </div>
            </div>*/}
        </div>
    )
}
export default Team;