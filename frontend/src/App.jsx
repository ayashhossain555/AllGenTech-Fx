import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import WhoWeAre from "./components/WhoWeAre";

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contactUs" element={<ContactUs />} />"
      <Route path="/whoweare" element={<WhoWeAre />} />
    </Routes>
    {/* <Services /> */}
  </div>
);

export default App;
