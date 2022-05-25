
import React from 'react';
import Home from './components/Home';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Contacts from './components/Contacts';
import Favorites from './components/Favorites';
import Thanks from './components/Thanks';







function App() {



  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Thanks" element={<Thanks />} />


      </Routes>


    </>
  )
}
export default App;