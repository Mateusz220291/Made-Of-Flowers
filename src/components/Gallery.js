import React from "react";
import styled from "styled-components";
import img1 from "../images/Flowers1.jpg";
import img2 from "../images/Flowers2.jpg";
import img3 from "../images/Flowers3.jpg";
import img4 from "../images/Flowers4.jpg";
import img5 from "../images/Flowers5.jpg";

import Masonry from "react-masonry-css";

const Container = styled.div`
  max-width: 1300px;
  padding: 30px;
  margin: 0 auto;
`;
const Gimg = styled.img`
  width: 100%;
`;
const ContainerTitle = styled.h1``;
const ContainerText = styled.h3``;

function Gallery() {
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <>
      <Container>
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
          <Gimg src={img1} alt="gallery_photo"></Gimg>
          <Gimg src={img4} alt="gallery_photo"></Gimg>
          <Gimg src={img2} alt="gallery_photo"></Gimg>
          <Gimg src={img3} alt="gallery_photo"></Gimg>
          <Gimg src={img5} alt="gallery_photo"></Gimg>
          <Gimg src={img1} alt="gallery_photo"></Gimg>
          <Gimg src={img2} alt="gallery_photo"></Gimg>
          <Gimg src={img3} alt="gallery_photo"></Gimg>
          <Gimg src={img4} alt="gallery_photo"></Gimg>
          <Gimg src={img5} alt="gallery_photo"></Gimg>
          <Gimg src={img2} alt="gallery_photo"></Gimg>
          <Gimg src={img3} alt="gallery_photo"></Gimg>
          <Gimg src={img1} alt="gallery_photo"></Gimg>
        </Masonry>
      </Container>
    </>
  );
}

export default Gallery;
