import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './CardsWrap.css'

export default function CardsWrap({data}) {
    const [Data, setData] = useState([])

    useEffect(() => {
        let isMounted = true;

        if(Array.isArray(data) && isMounted) setData(data)

        return () => {
            isMounted = false
        };
    }, [data])

  return (
    <div className='cards-wrap'>
        {
            Data.map(item => {
                return (
                    <div className="card">
                        <img src={item.image} alt="Past Paper" className="image" />

                        <div className="content">
                            <div className="label-wrap">
                             <Link to="" className="video-link"><p className="label curved">Video</p></Link>  
                                <img src="/images/video-circle.png" alt="Video Icon" className="video-icon" />
                            </div>

                            <div className="sub-content">
                                <p className="title">{item.title}</p>

                                <div className="labels"> 
                                    <p className="label light-blue">2 Past papers</p>
                                    <p className="label royal-blue">Answer sheet</p>
                                    <div className="label-wrap">
                                    <Link to="" className="video-link"> <p className="label purple">Paper discussion</p></Link>   
                                        <img src="/images/video-circle.png" alt="Video Icon" className="video-icon small" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}