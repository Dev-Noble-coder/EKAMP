import React from "react";
import HeroPage from "../components/HomePageComponents/HeroPage";
import ServicesPage from "../components/HomePageComponents/ServicesPage";
import AboutUsPage from "../components/HomePageComponents/AboutUsPage";
import Blog from "../components/HomePageComponents/Blog";
import Faq from "../components/HomePageComponents/Faq";
import Newsletter from "../components/HomePageComponents/Newsletter";

const HomePage = () => (
  <>
    <HeroPage />
    <AboutUsPage />
    <ServicesPage />
    <Blog />
    <Faq />
    <Newsletter />
  </>
);

export default HomePage;
