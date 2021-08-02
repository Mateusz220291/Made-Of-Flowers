import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = styled.div`
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--secondcolor);
  padding: 40px;
  @media screen and (max-width: 820px) {
    max-width: 280px;
    padding: 60 0px;
  }
`;
const ImgContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid black;
`;

const CardImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  padding: 3rem;
  transition: 0.2s linear;
  :hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
const CardTitle = styled.h3`
  padding: 0.5rem 0;
  font-size: clamp(1rem, 8vw, 2.2rem);
  font-family: "MonteCarlo", cursive;
`;
const CardText = styled.p`
  line-height: 1.2;
  font-weight: 200;
  font-size: 1.2rem;
`;

function OfferCard({ src, title, text }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Card data-aos="zoom-in" data-aos-once="true">
      <ImgContainer>
        <CardImg src={src}></CardImg>
      </ImgContainer>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </Card>
  );
}

export default OfferCard;
