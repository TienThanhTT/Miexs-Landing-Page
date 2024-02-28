import "./App.css";
// import Navbar from "../components/navbar/navbar";
// import Homepage from "../components/home/index";
// import Footer from "../components/footer/footer";
import StakingNavbar from "../components/navbar/StakingNavbar";
import StakingPage from "../components/StakingPage";
import ConsoleFooter from "../components/footer/Console_footer";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Homepage />
      <Footer /> */}
      <StakingNavbar />
      <StakingPage />
      <ConsoleFooter />
    </div>
  );
}

export default App;
