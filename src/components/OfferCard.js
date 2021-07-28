import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = styled.div`
  min-width: 450px;
  max-width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 50px 0;
`;
const ImgContainer = styled.div`
  width: 200px;
  height: 200px;
`;

const CardImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border: 3px solid white;
  border-radius: 50%;
`;
const CardTitle = styled.h3`
  padding: 1.2rem 0;
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
