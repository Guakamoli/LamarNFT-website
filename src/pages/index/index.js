import styles from './index.module.scss';
import Header from '../../components/Header';
import Welcome from '../../components/Welcome';
import Introduce from '../../components/Introduce';
import Team from '../../components/Team';
import Footer from '../../components/Footer';
import Roadmap from '../../components/Roadmap';
import Question from '../../components/Question';
import Swiper from '../../components/Swiper';
const Index = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Welcome />
            <Swiper />
            <Introduce />
            <Roadmap />
            <Team />
            <Question />
            <Footer />
        </div>
    )
};

export default Index;