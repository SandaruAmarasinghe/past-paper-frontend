import React from 'react'
import CardsWrap from '../CardsWrap/CardsWrap'
import './Professional.css'

const Professional = () => {

  const Data = [
    {
      title: 'CIMA',
      image: '/images/img-9.jpg'
    },
    {
      title: 'IT',
      image: '/images/img-9.jpg'
    },
    {
      title: 'Marketing',
      image: '/images/img-9.jpg'
    },
    {
      title: 'CIMA',
      image: '/images/img-9.jpg'
    },
    {
      title: 'CIMA',
      image: '/images/img-9.jpg'
    }
    
  ]

  return (
    <div className='container-Professional'>
      <h1 className='professional-text-h2'>Professional Qualification</h1>
           
          <div class="container-fluid full-width">
          <div class="row-fluid">
              <a class="btn pull-left">All</a>
              <a class="btn">CIMA</a>
              <a class="btn">IT </a>
              <a class="btn">Marketing</a>
              <a class="btn">CIMA</a>
              <a class="btn">CIMA</a>
          </div>
</div>
      <CardsWrap data={Data} />
    </div>
  )
}

export default Professional
