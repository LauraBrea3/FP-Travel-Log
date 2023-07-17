import React from 'react';
import Cards from './Cards'
// import Footer from './Footer';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <Navbar />
      <Cards />
      {/* //<Footer /> */}
    </div>
  );
};

export default Home;
