import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components";
import ConsoleHomepage from "../components/console";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/console/*" element={<ConsoleHomepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
