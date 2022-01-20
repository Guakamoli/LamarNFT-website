import styles from './index.module.scss';
import { useRouter } from 'next/router'
const Header = function() {
    const router = useRouter()
    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.left}>
                    <img src='/images/logo.png' className={styles.imgStyle} />
                </div>
                <div className={styles.right}>
                    <div>Discord</div>
                    <div>Twitter</div>
                    <div>OpenSea</div>
                    <div>Learn more</div>
                    <div className={styles.gradientBtn}>
                        <img src='/images/bt_mint.png' onClick={() => router.push('/mint')}/>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Header;