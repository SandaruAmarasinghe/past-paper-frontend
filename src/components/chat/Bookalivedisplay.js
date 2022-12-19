import React from "react";
import "./chat.css";

export default function Bookalivedisplay() {
    const booked = () => {
        alert("successfuly Booked!");
      }

  return (

    <div className="display-container">
        
      <h1 className="heading-one"> Book A Live Paper Discussion</h1>
      <center>
        <img
          src="images/img-1.jpg"
          className="image-booking"
          alt="centered image"
          height="298"
          width="398"
        />{" "}
      </center>

      <div className="details-display">
         
                <p> Lecturer Name : Dr. Pasindu R </p>
                <p> Subject : Mathematics </p>
                <p> Time : 6:00 p.m  </p>
                <p> Date: 11/12/2020 </p>
                <p>  Live Online : Zoom  </p>
      </div>

           <div>
           
           <button className="buttonBook" onClick={booked}>Book Now</button>
          
           </div>
    </div>
  );
}