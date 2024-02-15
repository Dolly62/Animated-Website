import React from "react";
import home from "../../assets/home.png";
import Banner from "../Reuse/Banner";

const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24">
      <Banner
        home={home}
        heading="Develop Your Skills Without Diligence"
        subheading="A good example of a paragraph contains a topic sentence, details
          and a conclusion. There are many different kinds of animals that
          live in India."
        btn1="Get Started"
        btn2="Discount"
      />
    </div>
  );
};

export default Home;
