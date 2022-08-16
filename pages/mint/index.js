import styles from './index.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MintContent from '../../components/MintContent'
import MintContainer from '../../components/MintContainer/index.tsx';
const Mint = () => {
    return (
        <div className={styles.container}>
            {/* <Header /> */}
            {/* <MintContent /> */}
            <MintContainer />
            <div style={{position: 'absolute', bottom: 0,width: '100%'}}>
                <Footer />
            </div>
        </div>
    )
};

export default Mint;