import React from 'react';
import '../App.css';
import { Button1 } from './Button1';
import './HeroSection.css';
import ImageSlider from './ImageSlider'
import { SliderData } from './SliderData';
import CustomSearch from './CustomSearch'
import AboutUs from './AboutUs';
import Discussion from './Discussion';
import CardsWrap from './CardsWrap/CardsWrap'
import DownloadApp from './DownloadApp';
import ContactUs from './ContactUs';

function HeroSection() {
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
    <React.Fragment>
      <ImageSlider slides={SliderData} />
      <CustomSearch/>
    <div className='hero-container'>
      {/*<video src='/videos/video-1.mp4' autoPlay loop muted />*/}
      
      <h1 className='welcome-text'>Welcome To Past Papers</h1>
      <p>Best and popular apps for education, Past papers from all varities. </p>
      <div className='hero-btns'>
        <Button1
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button1>
      </div>
     
    </div>
    <div className='home-main-types'>
      <h1 className='hero-h1'>Main Categories</h1>
      <p>Experience the live 1:1 class for kids to explore their hobby & talent</p>
      <div class="row-fluid-1">
            <a className="btn pull-left">All</a>
            <a className="btn">Most Popular</a>
            <a className="btn">Trending </a>
            <a className="btn">Just Added</a>
        </div>
    </div>
    <CardsWrap data={Data} />
    <AboutUs/>
    
    <div className='home-main-types'>
      <h1 className='hero-h1'>School Pastpapers</h1>
      <p>Experience the live 1:1 class for kids to explore their hobby & talent</p>
      <div class="row-fluid-1">
            <a className="btn pull-left">All</a>
            <a className="btn">Most Popular</a>
            <a className="btn">Trending </a>
            <a className="btn">Just Added</a>
        </div>
    </div>
    <CardsWrap data={Data} />
    <div  className='btn-more-div'>
    <button className='btn-more'>View All</button>
    </div>

    <div className='home-main-types'>
      <h1 className='hero-h1'>School Pastpapers 2</h1>
      <p>Experience the live 1:1 class for kids to explore their hobby & talent</p>
      <div class="row-fluid-1">
            <a className="btn pull-left">All</a>
            <a className="btn">Most Popular</a>
            <a className="btn">Trending </a>
            <a className="btn">Just Added</a>
        </div>
    </div>
    
    <CardsWrap data={Data} />
    <div  className='btn-more-div'>
    <button className='btn-more'>View All</button>
    </div>
    <Discussion/>
    <div className='home-main-types'>
      <h1 className='hero-h1'>Our Partners</h1>
      <p>Our partners will have below</p>
      <div class="row-fluid-1">
            <div className="one">All</div>
            <div className="two">Most Popular</div>
            <div className="three">Trending </div>
            <div className="four">Just Added</div>
        </div>
    </div>
   <DownloadApp/>
   <ContactUs/>
    </React.Fragment>
  );
}

export default HeroSection;
