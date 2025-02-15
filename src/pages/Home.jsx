import React from "react";
import NavbarArea from "../components/NavbarArea";
import Footer from "../components/Footer";
import Container_1 from "../components/common/Container_1";

const Home = () => {
  return (
    <div>
      <NavbarArea />
      <Container_1>
        {/* Tab bar */}
        <div className="hidden md:block py-5">
          <img src="imgs/tab_bar.png" alt="Tab bar" />
        </div>
      </Container_1>
      <Footer />
    </div>
  );
};

export default Home;
