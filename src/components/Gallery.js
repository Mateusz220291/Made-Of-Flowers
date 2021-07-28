import React, { useEffect } from "react";
import styled from "styled-components";
import img1 from "../images/Flowers1.jpg";
import img2 from "../images/Flowers2.jpg";
import img3 from "../images/Flowers3.jpg";
import img4 from "../images/Flowers4.jpg";
import img5 from "../images/Flowers5.jpg";

import Masonry from "react-masonry-css";
import Aos from "aos";
import "aos/dist/aos.css";

const Container = styled.div`
  max-width: 1300px;
  padding: 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--secondcolor);
`;
const Gimg = styled.img`
  width: 100%;
  border: 2px solid var(--thirdcolor);
`;
const ContainerTitle = styled.h1`
  font-family: "MonteCarlo", cursive;
  font-size: clamp(1rem, 8vw, 4rem);
  padding: 3rem 0;
`;
const ContainerText = styled.p`
  line-height: 1.5;
  padding-bottom: 3rem;
  text-align: center;
  font-size: clamp(0.5rem, 4vw, 1.5rem);
`;

function Gallery() {
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <Container id="gallery">
        <ContainerTitle>Galeria</ContainerTitle>
        <ContainerText>
          Poniżej przedstawiamy kilka wybranych zdjęć z naszych dotychczasowych
          realizacji. Zapraszamy po więcej na naszego firmowego instagrama!
        </ContainerText>
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <Gimg data-aos="fade-up" src={img1} alt="gallery_photo"></Gimg>
          <Gimg data-aos="fade-up" src={img4} alt="gallery_photo"></Gimg>
          <Gimg data-aos="fade-up" src={img2} alt="gallery_photo"></Gimg>
          <Gimg data-aos="fade-up" src={img3} alt="gallery_photo"></Gimg>
          <Gimg data-aos="fade-up" src={img5} alt="gallery_photo"></Gimg>
          <Gimg data-aos="fade-up" src={img1} alt="gallery_photo"></Gimg>
          <Gimg data-aos="fade-up" src={img2} alt="gallery_photo"></Gimg>
          <Gimg data-aos="fade-up" src={img3} alt="gallery_photo"></Gimg>
          <Gimg data-aos="fade-up" src={img4} alt="gallery_photo"></Gimg>
          <Gimg data-aos="fade-up" src={img5} alt="gallery_photo"></Gimg>
          <Gimg data-aos="fade-up" src={img2} alt="gallery_photo"></Gimg>
          <Gimg data-aos="fade-up" src={img2} alt="gallery_photo"></Gimg>
          <Gimg data-aos="fade-up" src={img2} alt="gallery_photo"></Gimg>
        </Masonry>
      </Container>
    </>
  );
}

export default Gallery;
