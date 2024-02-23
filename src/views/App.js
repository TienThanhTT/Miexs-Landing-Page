import "./App.css";
import Navbar from "../components/navbar/navbar";
import Homepage from "../components/home/index";
import Footer from "../components/footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
