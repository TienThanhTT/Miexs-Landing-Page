import React from "react";
import Navbar from "./navbar/navbar";
import Homepage from "./home";

class ConsoleHomepage extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Homepage />
      </>
    );
  }
}
export default ConsoleHomepage;
