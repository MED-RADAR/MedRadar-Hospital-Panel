import React from 'react';
import Hero from './Hero'
import Services from './Services'
import Testimonials from './Testimonials'
import Footer from './Footer'
import { useLocation } from 'react-router-dom';
const Home = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
