import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import AboutUs from "./pages/AboutUs";
import Developers from "./pages/Developers";
import Footer from "./pages/Footer";
import Loading from "./pages/Header";
import Join from "./pages/Join";
import Partners from "./pages/Partners";
import Properties from "./pages/Properties";
import Subscribe from "./pages/Subscribe";
import { ThemeProvider } from "./providers/ThemeProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <NavBar />
          <Loading />
          <Partners />
          <Properties />
          <AboutUs />
          <Developers />
          <Join />
          <Subscribe />
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
