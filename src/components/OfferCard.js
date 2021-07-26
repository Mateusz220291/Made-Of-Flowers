import React, { useEffect } from "react";
import styled from "styled-components";
// import Aos from "aos";
// import "aos/dist/aos.css";

const Card = styled.div`
  max-width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: pink;
  padding: 50px 0;
`;
const ImgContainer = styled.div`
  border-radius: 50%;
  width: 200px;
`;

const CardImg = styled.img`
  display: flex;
  width: 100%;
  border-radius: 50%;
  border: 2px solid pink;
`;
const CardTitle = styled.h2`
  padding: 1.2rem 0;
`;
const CardText = styled.p`
  line-height: 1.2;
  font-weight: 200;
`;

function OfferCard({ src, title, text }) {
  //   useEffect(() => {
  //     Aos.init({ duration: 2000 });
  //   }, []);
  return (
    <Card data-aos="flip-left">
      <ImgContainer>
        <CardImg src={src}></CardImg>
      </ImgContainer>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </Card>
  );
}

export default OfferCard;
