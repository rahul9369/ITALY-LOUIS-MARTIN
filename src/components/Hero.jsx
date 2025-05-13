import React from "react";
import Footer from "./Footer";
import BestSeller from "./Bestseller";
import Categories from "./Cotegary";
import Carousal from "./Carousal";
import { Helmet } from "react-helmet";

function Hero() {
  return (
    <div>
      <Helmet>
        <title>Louis Martin Audio</title>
        <meta
          name="description"
          content="Redefining Audio Excellence. Louis Martin Audio represents an exemplary journey of innovation and resilience in the professional audio industry. Established in 2008 in Milano Italy."
        />
        <meta
          name="keywords"
          content="Louis Martin, innovation strategist, digital solutions, creative technologist, professional journey, personal brand, portfolio, about Louis, digital transformation"
        />
      </Helmet>
      <Carousal />
      <Categories />
      <BestSeller />
      {/* <LunchItems /> */}
      <Footer />
    </div>
  );
}

export default Hero;
