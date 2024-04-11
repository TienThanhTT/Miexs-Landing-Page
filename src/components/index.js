import React from "react";
import Navbar from "./navbar/navbar";
import Homepage from "./home";
import Footer from "./footer/footer";

class Home extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Homepage />
        <Footer />
      </>
    );
  }
}
export default Home;
