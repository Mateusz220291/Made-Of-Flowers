import React, { useEffect } from "react";
import styled from "styled-components";
import OfferCard from "./OfferCard";
// import Aos from "aos";
// import "aos/dist/aos.css";
import Img1 from "../images/Flowers1.jpg";
// import Img2 from "../images/Responsive.svg";
// import Img3 from "../images/Functionality.svg";
// import Img4 from "../images/SEO.svg";

const OfferSection = styled.section`
  display: flex;
  background: var(--maincolor);
  /* background: linear-gradient(to right top, var(--dark), var(--maincolor)); */
  text-align: center;
  justify-content: center;
  padding: 0 3rem 100px 3rem;
  color: white;
`;
const OfferContainer = styled.div`
  display: flex;
  max-width: 1300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const OfferTitle = styled.h2`
  font-size: 40px;
  padding: 3rem 0;
`;
const OfferText = styled.p`
  font-size: 17px;
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
          Co oferuje?
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
            title="Lorem..."
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore
            sequi iure enim eius!"
          />
          <OfferCard
            src={Img1}
            title="Lorem..."
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore
            sequi iure enim eius."
          />
          <OfferCard
            src={Img1}
            title="Lorem..."
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore
            sequi iure enim eius."
          />
          <OfferCard
            src={Img1}
            title="Lorem..."
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore
            sequi iure enim eius."
          />
        </OfferWrapper>
      </OfferContainer>
    </OfferSection>
  );
}

export default Offer;
