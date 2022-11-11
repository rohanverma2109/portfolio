import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./pages/Loader";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

function App() {
  useEffect(()=>{
    setTimeout(()=>{
      document.body.style.overflow = "visible";
    },4000)
  },[])
  return (
    <>
        <Loader/>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/portfolio" element={<Portfolio/>}/>
        </Routes>
        
    </>
  );
}

export default App;
