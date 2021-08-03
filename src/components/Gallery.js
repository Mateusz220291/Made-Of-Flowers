import React, { useEffect, useState } from "react";
import styled from "styled-components";
import img1 from "../images/Flowers1.jpg";
import img2 from "../images/Flowers2.jpg";
import img3 from "../images/Flowers3.jpg";
import img4 from "../images/Flowers4.jpg";
import img5 from "../images/Flowers5.jpg";
import img6 from "../images/Flowers6.jpg";
import img7 from "../images/Flowers7.jpg";
import img8 from "../images/Flowers8.jpg";
import img9 from "../images/Flowers9.jpg";
import img10 from "../images/Flowers10.jpg";
import img11 from "../images/Flowers11.jpg";
import img12 from "../images/Flowers12.jpg";
import Masonry from "react-masonry-css";
import CloseIcon from "@material-ui/icons/Close";
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
const ImgWrapper = styled.div`
  cursor: pointer;
  transition: all 350ms ease;
  object-fit: contain;
  :hover {
    filter: opacity(0.8);
  }
`;

const Gimg = styled.img`
  width: 100%;
  border: 2px solid var(--thirdcolor);
`;
const ContainerTitle = styled.h1`
  font-family: "MonteCarlo", cursive;
  font-size: clamp(2.5rem, 8vw, 4rem);
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

  let data = [
    { id: 1, imgSrc: img1, alt: "obrazek" },
    { id: 2, imgSrc: img2, alt: "obrazek" },
    { id: 3, imgSrc: img3, alt: "obrazek" },
    { id: 4, imgSrc: img4, alt: "obrazek" },
    { id: 5, imgSrc: img5, alt: "obrazek" },
    { id: 6, imgSrc: img6, alt: "obrazek" },
    { id: 7, imgSrc: img7, alt: "obrazek" },
    { id: 8, imgSrc: img8, alt: "obrazek" },
    { id: 9, imgSrc: img9, alt: "obrazek" },
    { id: 10, imgSrc: img10, alt: "obrazek" },
    { id: 11, imgSrc: img11, alt: "obrazek" },
    { id: 12, imgSrc: img12, alt: "obrazek" },
  ];
  const [modal, setModal] = useState(false);
  const [tempImg, setTempImg] = useState("");
  const getImg = (imgSrc) => {
    setTempImg(imgSrc);

    setModal(true);
  };
  return (
    <>
      <Container id="gallery">
        <ContainerTitle>Galeria</ContainerTitle>
        <ContainerText>
          Poniżej przedstawiamy kilka wybranych zdjęć z naszych dotychczasowych
          realizacji. Zapraszamy po więcej na naszego firmowego instagrama!
        </ContainerText>
        <div className={modal ? "modal open" : "modal"}>
          <img src={tempImg} alt={data.alt} />
          <CloseIcon onClick={() => setModal(false)} />
        </div>
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.map((item, index) => {
            return (
              <ImgWrapper
                data-aos="fade-up"
                data-aos-once="true"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <Gimg src={item.imgSrc}></Gimg>
              </ImgWrapper>
            );
          })}
        </Masonry>
      </Container>
    </>
  );
}

export default Gallery;
