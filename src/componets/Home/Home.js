import React from "react";
import Cabs from "./Cabs";
import CarouselBanner from "./CarouselBanner";
import HavelockIsland from "./Havelock Island/HavelockIsland";
import NeilIsland from "./Havelock Island/NeilIsland";
import PopularActivities from "./Popular Activities/PopularActivities";
import OurStory from "./Our Story/OurStory";
import PopularDestinations from "./Popular Destinations/PopularDestinations";
import CustomerReview from "./Customer Review/CustomerReview";
import Certified from "./Certified/Certified";

const Home = () => {
  return (
    <div className="max-w-[1940px] mx-auto">
      <div>
        {" "}
        <CarouselBanner />{" "}
      </div>
      <div className="xl:w-[1000px] lg:w-[800px] md:w-[700px] sm:w-10/12 w-full mx-auto">
        <Cabs />
        <HavelockIsland />
        <NeilIsland />
        {/* <Cruises /> */}
        <PopularActivities />
      </div>
      <div className="w-full ">
        <OurStory />
      </div>
      <div className="xl:w-[1000px] lg:w-[800px] md:w-[700px] sm:w-10/12 w-full mx-auto">
        <PopularDestinations />
        <CustomerReview />
        <Certified />
      </div>
    </div>
  );
};

export default Home;
