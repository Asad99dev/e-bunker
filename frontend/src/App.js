import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";

import About from "./Pages/About.js";
import Malware from "./Pages/Malware.js";
import Phishing from "./Pages/Phishing.js";
import SignIn from "./Pages/SignIn.js";
import SignUp from "./Pages/SignUp.js";
import TargetedAttacks from "./Pages/TargetedAttacks.js";
import StayingSafeOnline from "./Pages/StayingSafeOnline.js";
import HowProtected from "./Pages/HowProtected.js";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/malware" element={<Malware />} />
          <Route path="/phishing" element={<Phishing />} />
          <Route path="/atktarget" element={<TargetedAttacks />} />
          <Route path="/safe-online" element={<StayingSafeOnline />} />
          <Route path="/protected" element={<HowProtected />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
