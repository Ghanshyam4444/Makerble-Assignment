import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/navbar";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
