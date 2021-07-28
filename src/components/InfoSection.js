import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "../components/GlobalStyles";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link as LinkS } from "react-scroll";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  padding-bottom: 0;
  color: var(--secondcolor);
`;
const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    font-family: "MonteCarlo", cursive;
    font-size: clamp(1.5rem, 6vw, 2.5rem);
  }

  p {
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }
`;
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 2px solid var(--thirdcolor);
    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;
const LinkTo = styled(LinkS)`
  width: 100%;
`;

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  image,
  reverse,
  buttonLabel,
}) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Section id="aboutMe">
      <Container>
        <ColumnRight data-aos-once="true" data-aos="fade-right">
          <img src={image} alt="home" />
        </ColumnRight>
        <ColumnLeft data-aos="fade-left" data-aos-once="true">
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <LinkTo
            to="gallery"
            primary="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            <Button>{buttonLabel}</Button>
          </LinkTo>
        </ColumnLeft>
      </Container>
    </Section>
  );
};

export default InfoSection;
