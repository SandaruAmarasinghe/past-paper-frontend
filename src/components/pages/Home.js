import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import CardsWrap from '../CardsWrap/CardsWrap'

function Home() {
  const Data = [
    {
      title: 'Test A/L title',
      image: '/images/img-9.jpg'
    },
    {
      title: 'Test A/L title',
      image: '/images/img-9.jpg'
    },
    {
      title: 'Test A/L title',
      image: '/images/img-9.jpg'
    },
    {
      title: 'Test A/L title',
      image: '/images/img-9.jpg'
    },
    {
      title: 'Test A/L title',
      image: '/images/img-9.jpg'
    }
  ]
  return (
    <>
      <HeroSection />
     
    </>
  );
}

export default Home;
