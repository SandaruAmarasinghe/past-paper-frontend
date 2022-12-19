import React, { Component } from 'react'
import jsPDF from 'jspdf'
import logo from '../../images/img-1.jpg'

export default class Download extends Component {
    pdfGenarate=()=>{
        var doc=new jsPDF('landscape','px','a4','false')
        doc.addImage(logo)
    }
  render() {
    return (
      <div style={{textAlign:"center", margin:"50px", padding:"10px"}}>
          <button onClick={this.pdfGenarate}>Download</button>
      </div>
    )
  }
}
