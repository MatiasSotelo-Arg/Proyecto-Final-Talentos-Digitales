// <<<<<<< HEAD
// // import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

// import items from "./data/data.json";

// // import Login from "./components/Auth0/Login";
// // import Logout from "./components/Auth0/Logout";
// // import Profile from "./components/Auth0/Profile";

// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css";




function App() {

  return (
 
    <BrowserRouter>

    <NavBar/>

    <Routes>

      
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
    
      
    
  );
}

export default App;
