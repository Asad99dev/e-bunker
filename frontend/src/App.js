import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";

import About from "./Pages/About.js";
import Malware from "./Pages/Malware.js";
import MalwareLearn from "./Pages/MalwareLearn";
import Phishing from "./Pages/Phishing.js";
import PhishingLearn from "./Pages/PhishingLearn.js";
import PhishingExamples from "./Pages/PhishingExamples.js";
import SignIn from "./Pages/SignIn.js";
import SignUp from "./Pages/SignUp.js";
import HowProtected from "./Pages/HowProtected.js";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile.js";
import Dashboard from "./Pages/Dashboard";
import Unauthorized from "./Pages/Unauthorized";

function App() {
  return (
    <>
      <Router>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/malware" element={<Malware />} />
          <Route path="/malware-learn" element={<MalwareLearn />} />
          <Route path="/phishing" element={<Phishing />} />
          <Route path="/phishing-learn" element={<PhishingLearn />} />
          <Route path="/phishing-examples" element={<PhishingExamples />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/protected" element={<HowProtected />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
