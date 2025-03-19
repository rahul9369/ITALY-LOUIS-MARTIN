import React from "react";
import Footer from "./Footer";
import BestSeller from "./Bestseller";
import Categories from "./Cotegary";
import Carousal from "./Carousal";

function Hero() {
  return (
    <div>
      <Carousal />
      <Categories />
      <BestSeller />
      {/* <LunchItems /> */}
      <Footer />
    </div>
  );
}

export default Hero;
