import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Destinations from "./pages/Destinations/Destinations";
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
    </>
  );
}

export default App;
