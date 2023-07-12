import React from 'react';
import Navbar from './components/navbar';
import Home from './components/pages/home';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import Destination from './components/pages/Destination';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/sign-up' exact element={<SignUp />} />
          <Route path='/services/activity' element={<Destination />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;