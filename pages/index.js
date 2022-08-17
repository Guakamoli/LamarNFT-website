import Container from "../components/Container/index.tsx";
import Swiper from "../components/Swiper";
import Introduce from "../components/Introduce";
import LMCollection from "../components/LMCollection";
import Roadmap from "../components/Roadmap";
import Question from "../components/Question";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";

export default function (props) {
  return (
    <Container {...props}>
      <Swiper />
      <Introduce />
      <LMCollection />
      <Roadmap />
      <Question />
      <Footer />
    </Container>
  );
}
