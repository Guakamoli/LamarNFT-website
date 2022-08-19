import Footer from "../../components/Footer";
import Container from "../../components/Container/index.tsx";

const Mint = (props) => {
  return (
    <Container {...props}>
      <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Footer />
      </div>
    </Container>
  );
};

export default Mint;
