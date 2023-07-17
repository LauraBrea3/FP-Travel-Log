import React from 'react';
import Cards from './Cards'
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <Navbar />
      <Cards />
    </div>
  );
};

export default Home;
