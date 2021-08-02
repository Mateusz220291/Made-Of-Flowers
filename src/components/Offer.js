import React, { useEffect } from "react";
import styled from "styled-components";
import OfferCard from "./OfferCard";
// import Aos from "aos";
// import "aos/dist/aos.css";
import Img1 from "../images/wedding1.png";
import Img2 from "../images/box1.png";
import Img3 from "../images/bouquet1.png";
import Img4 from "../images/flower1.png";

const OfferSection = styled.section`
  display: flex;
  background: var(--maincolor);
  /* background: linear-gradient(to right top, var(--dark), var(--maincolor)); */
  text-align: center;
  justify-content: center;
  padding: 0 3rem 100px 3rem;
  color: var(--secondcolor);
`;
const OfferContainer = styled.div`
  display: flex;
  max-width: 1300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const OfferTitle = styled.h1`
  font-family: "MonteCarlo", cursive;
  font-size: clamp(2.5rem, 8vw, 4rem);
  padding: 3rem 0;
`;
const OfferText = styled.p`
  font-size: clamp(0.5rem, 4vw, 1.5rem);
  line-height: 1.5;
`;
const OfferWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

function Offer() {
  //   useEffect(() => {
  //     Aos.init({ duration: 2000 });
  //   }, []);
  return (
    <OfferSection id="offer">
      <OfferContainer>
        <OfferTitle data-aos="fade-up" data-aos-once="true">
          Co oferujemy?
        </OfferTitle>
        <OfferText data-aos="fade-up" data-aos-once="true">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore
          sequi iure enim eius neque non aperiam consectetur dolor! Debitis
          voluptas voluptate eius quidem odit? Asperiores eligendi aperiam
          delectus veniam.{" "}
        </OfferText>
        <OfferWrapper>
          <OfferCard
            src={Img1}
            title="Ślub"
            text="Kompleksowa usługa dekoracji ślubnej sali oraz kościoła."
          />
          <OfferCard
            src={Img2}
            title="Flower Box"
            text="Kompozycje ze świeżych kwiatów zamknięte w pudełku."
          />
          <OfferCard
            src={Img3}
            title="Inne uroczystości"
            text="Udekorujemy każde przyjęcie, chrzciny, komunie..."
          />
          <OfferCard
            src={Img4}
            title="Rośliny doniczkowe"
            text="Stacjonarnie posiadamy szeroki wybór roślin, które upiększą Twój ogród."
          />
        </OfferWrapper>
      </OfferContainer>
    </OfferSection>
  );
}

export default Offer;
