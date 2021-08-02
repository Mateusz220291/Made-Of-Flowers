import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components/macro";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Aos from "aos";
import "aos/dist/aos.css";
// import { Button } from "./Button";
// import {IoMdArrowRoundForward} from 'react-icons/io';
// import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
// import { SliderData } from "../data/SliderData";

// const SliderButtons = styled.div`
//     position: absolute;
//     bottom: 50px;
//     right: 50px;
//     display: flex;
//     z-index: 10;
// `;

// const arrowButtons = css`
//     width: 50px;
//     height: 50px;
//     color: #fff;
//     cursor: pointer;
//     background:#000d1a;
//     border-radius: 50px;
//     padding: 18px;
//     margin-right: 1rem;
//     user-select: none;
//     transition: 0.3;

//     &:hover{
//       background: #cd853f;
//       transform: scale(1.05);
//     }
// `;

// const PrevArrow = styled(IoArrowBack)`
//     ${arrowButtons}
// ;`

// const NextArrow = styled(IoArrowForward)`
//     ${arrowButtons}
// ;`

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1200px;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  /* .fade-appear {
    opacity: 0;
    z-index: 1;
  }
  .fade-appear.fade-appear-active {
    opacity: 1;
    transition: opacity 1000ms linear;
  } */

  /* enter */
  /* .fade-enter {
    opacity: 0;
    z-index: 1;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 5000ms linear 5000ms;
  } */

  /* exit */
  /* .fade-exit {
    opacity: 1;
  }
  .fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 5000ms linear;
  }
  .fade-exit-done {
    opacity: 0;
  } */

  /* slide enter */
  /* .slide-enter {
    opacity: 0;
    transform: scale(0.97) translateY(5px);
    z-index: 1;
  }
  .slide-enter.slide-enter-active {
    opacity: 1;
    transform: scale(1) translateY(0);
    transition: opacity 3000ms linear 1000ms,
      transform 3000ms ease-in-out 1000ms;
  } */

  /* slide exit */
  /* .slide-exit {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  .slide-exit.slide-exit-active {
    opacity: 0;
    transform: scale(0.97) translateY(5px);
    transition: opacity 1500ms linear, transform 1500ms ease-out;
  }
  .slide-exit-done {
    opacity: 0;
  } */
`;

const HeroSlide = styled.div`
  z-index: 1;
  height: 100%;
  width: 100%;
`;

const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.8) 50%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;
const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;
const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;

  h1 {
    font-family: "MonteCarlo", cursive;
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 500;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: center;
    margin-bottom: 0.8rem;
  }
`;
// const Arrow = styled(IoMdArrowRoundForward)`
//     margin-left: 0.5rem;
// `;

const Header = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 200000 });
  }, []);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlide, 7000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  });
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide>
              {index === current && (
                <TransitionGroup>
                  <CSSTransition
                    in={current + 1}
                    appear={true}
                    timeout={2000}
                    classNames="fade"
                  >
                    <HeroSlider>
                      <HeroImage src={slide.image} alt={slide.alt} />
                      <HeroContent>
                        <h1 data-aos-once="true" data-aos="fade-right">
                          {" "}
                          {slide.title}
                        </h1>
                      </HeroContent>
                    </HeroSlider>
                  </CSSTransition>
                </TransitionGroup>
              )}
            </HeroSlide>
          );
        })}
        {/* <SliderButtons>
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide}/>
                </SliderButtons> */}
      </HeroWrapper>
    </HeroSection>
  );
};

export default Header;
