import React from 'react'
import './App.css';
import MainNavbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import Ride from './components/Ride';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import { Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/about' element={<About />}> </Route>
        <Route path='/contact' element={<Contact />}> </Route>
        <Route path='/signup' element={<SignUp />}> </Route>
      </Routes>
      <div className='fixed-bttom'>
        <Footer />
      </div>
    </>

  );
}

export default App;

