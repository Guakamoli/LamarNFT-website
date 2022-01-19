import { useNavigate } from "react-router-dom";
import styles from './index.module.scss';
import logo from './logo.png'
import bt_mint from './bt_mint.png'
const Header = function() {
    const naviage = useNavigate()
    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.left}>
                    <img src={logo} className={styles.imgStyle} />
                </div>
                <div className={styles.right}>
                    <div>Discord</div>
                    <div>Twitter</div>
                    <div>OpenSea</div>
                    <div>Learn more</div>
                    <div className={styles.gradientBtn} onClick={() => naviage('/mint')}>
                        <img src={bt_mint} />
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Header;