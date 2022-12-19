import React from 'react'
import CardsWrap from '../CardsWrap/CardsWrap'
import './Olevel.css'
import OLData from '../../data/ol_pastpapers.json'

const Olevel = () => {

  

  return (
    <div className='container-olevel'>
          <h1 className='olevel-text-h2'>Olevel Pastpapers</h1>
        <div className='row'>
          <div className='column'>
              <img src="images/img-1.jpg" alt="" width="100%" />
          </div>
          <div className='column'>
              <img src="images/img-1.jpg" alt="" width="100%" />
          </div>
          <div className='column'>
              <img src="images/img-1.jpg" alt="" width="100%" />
          </div>
        
        </div>

        <h2 className='olevel-text-h2'>Olevel Pastpapers Subjects</h2>

        <div class="container-fluid full-width">
        <div class="row-fluid">
            <a class="btn pull-left">All</a>
            <a class="btn">Subject 1</a>
            <a class="btn">Sinhala </a>
            <a class="btn">Maths</a>
            <a class="btn">Science</a>
            <a class="btn">History</a>
            <a class="btn">English</a>
            <a class="btn">Subject 1</a>
            <a class="btn">Subject 2</a>
            <a class="btn">English</a>
            <a class="btn">Subject 1</a>
            <a class="btn">Subject 2</a>
            <a class="btn">English</a>
            <a class="btn">Subject 1</a>
            <a class="btn">Subject 2</a>
            
        </div>
    </div>
    
    <CardsWrap data={OLData["data"]} />
    </div>
  )
}

export default Olevel
