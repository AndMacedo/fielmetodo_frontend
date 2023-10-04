// eslint-disable-next-line no-unused-vars
import React from "react";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import HomePage from "./Pages/HomePage/homePage.jsx";
import NotFound from "./Pages/NotFound/notFound";
import Testimonials from "./Pages/Testimonials/Testimonials";
import AboutUs from "./Pages/AboutUs/AboutUs";

function App() {
  return (
    <div className="app-body">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
