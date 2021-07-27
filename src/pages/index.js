import React, { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import InfoSection from "../components/InfoSection";
import Offer from "../components/Offer";
import Gallery from "../components/Gallery";
import { SliderData } from "../data/SliderData";
import { InfoData } from "../data/InfoData";
import Footer from "../components/Footer";
import GlobalStyle from "../components/GlobalStyles";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Header slides={SliderData} />
      <InfoSection {...InfoData} />
      <Offer />
      <Gallery />
      <Footer />
    </>
  );
}

export default Home;
