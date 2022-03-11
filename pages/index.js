import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Introduce from '../components/Introduce';
import Team from '../components/Team';
import Footer from '../components/Footer';
import Roadmap from '../components/Roadmap';
import Question from '../components/Question';
import Swiper from '../components/Swiper';
import LMCollection from '../components/LMCollection'
import Whitelist from '../components/Whitelist';
const Index = () => {
    return (
        <div style={{background: '#000000'}}>
            <Header />
            <Welcome />
            <Swiper />
            <Introduce />
            <LMCollection />
            <Whitelist />
            <Roadmap />
            {/*<Team />*/}
            <Question />
            <Footer />
        </div>
    )
};
export default Index;