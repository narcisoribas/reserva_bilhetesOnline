import React from 'react'

import carrosel1 from "./img/4.jpg"
import carrosel2 from "./img/3.jpg"

function Carrosel() {
  return (
    <div className="container-fluid p-0">
  
    <div id="header-carousel" className="carousel bg slide" data-ride="carousel">
      <div className="carousel-inner bg">
        <div className="carousel-item active">
          <img className="w-100" src={carrosel1} alt="Image" />
          <div className=" bg carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{maxWidth: 900}}>
              <h4 className="text-white text-uppercase mb-md-3">Huambo &amp; Express</h4>
              <h1 className="display-3 text-white mb-md-4">A menor distância entre dois destinos</h1>
              <a href className="btn buttonColorBackground py-md-3 px-md-5 mt-2">Agora</a>
            </div>
          </div>
        </div>

        <div className="carousel-item ">
          <img className="w-100" src={carrosel2} alt="Image" />
          <div className="bg carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{maxWidth: 900}}>
              <h4 className="text-white text-uppercase mb-md-3">Viagem &amp; Turismo </h4>
              <h1 className="display-3 text-white mb-md-4">Decubra lugares incríveis conosco</h1>
              <a href className="btn py-md-3 px-md-5 mt-2 buttonColorBackground" >Agora</a>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
        <div className="btn btn-dark" style={{width: 45, height: 45}}>
          <span className="carousel-control-prev-icon mb-n2" />
        </div>
      </a>
      <a className="carousel-control-next" href="#header-carousel" data-slide="next">
        <div className="btn btn-dark" style={{width: 45, height: 45}}>
          <span className="carousel-control-next-icon mb-n2" />
        </div>
      </a>
    </div>
  </div>
  )
}

export default Carrosel
