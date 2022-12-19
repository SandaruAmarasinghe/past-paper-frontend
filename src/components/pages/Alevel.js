import React from 'react'
import CardsWrap from '../CardsWrap/CardsWrap'
import './Alevel.css'

const Alevel = () => {

  const Data = [
    {
      title: 'Bio Science 2015',
      image: '/images/img-9.jpg'
    },
    {
      title: 'GIT 2015',
      image: '/images/img-9.jpg'
    },
    {
      title: 'Maths 2015',
      image: '/images/img-9.jpg'
    },
    {
      title: 'Physics 2015',
      image: '/images/img-9.jpg'
    },
    {
      title: 'Chemistry 2015',
      image: '/images/img-9.jpg'
    }
  ]

  return (
    <div className='container-AL'>
      <h1 className='alevel-text-h2'>Alevel Pastpapers Subjects</h1>
           
          <div class="container-fluid full-width">
          <div class="row-fluid">
              <a class="btn pull-left">All</a>
              <a class="btn">GIT</a>
              <a class="btn">Maths </a>
              <a class="btn">Bio</a>
              <a class="btn">Physics</a>
              <a class="btn">Chemistry</a>
          </div>

</div>
      <CardsWrap data={Data} />
    </div>
  )
}

export default Alevel;
