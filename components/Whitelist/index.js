import styles from './index.module.scss'
export default function(){
    return (
        <div className={styles.contianer}>
            <div className={styles.title}>Roles and Whitelist</div>
            <div className={styles.list}>
                <div className={styles.item} style={{marginLeft: '120px'}}>
                    <div className={styles.itemTitle}>MVP</div>
                    <div className={styles.itemContent}>MVP role is given to those who made significant contributions to our community. Current Criteria: With 40 invites, you are a true MVP! First 35 MVPs will receive a free LM! Feel free to use MVP | in front of your server name to show your achievement! The criteria for earning an MVP role is subject to change.</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemTitle}>FanClub Member</div>
                    <div className={styles.itemContent}>As a FanClub Member, you are not only on the whitelist for LamarOdom's Metaverse but also eligible for many perks including exclusive giveaways and access to specific channels on the server! We will also host special events for FanClub Members periodically. There are two tiers of membership - Silver and Gold.  You can upgrade your membership level with higher Discord server rankings!</div>
                    <div className={styles.itemContent}>- Reach level 5 to become FanClub Gold Member and be listed on our whitelist!</div>
                    <div className={styles.itemContent} style={{marginTop:'14px'}}>**MVP and FanClub Gold Members are on the whitelist for future drops**</div>
                </div>
                <div className={styles.item}>
                <div className={styles.itemTitle}>Special Roles</div>
                <div className={styles.itemContent}>AllStar - To our celebrity friends and collaborators. </div>
                <div className={styles.itemContent}>Server Boosters - To those who help boost the server.</div>

                </div>
            </div>
        </div>
    )
}