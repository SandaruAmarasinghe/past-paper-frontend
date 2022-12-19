import React from 'react'
import CardsWrap from '../CardsWrap/CardsWrap'
import './Professional.css'

const SchoolExam = () => {

  const Data = [
    {
      title: 'O/L',
      image: '/images/img-9.jpg'
    },
    {
      title: 'A/L',
      image: '/images/img-9.jpg'
    },
    {
      title: 'Grade 5',
      image: '/images/img-9.jpg'
    },
    {
      title: 'Grade 9',
      image: '/images/img-9.jpg'
    },
    {
      title: 'Grade 10',
      image: '/images/img-9.jpg'
    }
    
  ]

  return (
    <div className='container-Professional'>
      <h1 className='professional-text-h2'>Professional Qualification</h1>
           
          <div class="container-fluid full-width">
          <div class="row-fluid">
              <a class="btn pull-left">All</a>
              <a class="btn">O/L</a>
              <a class="btn">A/L </a>
              <a class="btn">Grade 5</a>
              <a class="btn">Grade 10</a>
              <a class="btn">Grade 9</a>
              <a class="btn">Grade 11</a>
          </div>
</div>
      <CardsWrap data={Data} />
    </div>
  )
}

export default SchoolExam
