import React, { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
// import Header from "../components/Header";
// import AboutMe from "../components/AboutMe";
// import Offer from "../components/Offer";
// import Gallery from "../components/Gallery";
// import Footer from "../components/Footer";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <Header />
      <AboutMe />
      <Offer />
      <Gallery />
      <Footer /> */}
    </>
  );
}

export default Home;
