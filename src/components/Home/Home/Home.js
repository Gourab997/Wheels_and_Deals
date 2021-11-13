import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import HomeCars from "../HomeCars/HomeCars";
import Sevices from "../Services/Sevices";
import ShowReviews from "../ShowReviews/ShowReviews";
import TopBanner from "../TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <TopBanner></TopBanner>
      <HomeCars></HomeCars>
      <Sevices></Sevices>
      <ShowReviews></ShowReviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
