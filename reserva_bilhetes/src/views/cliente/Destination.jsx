import React from 'react'

import destination1 from "./img/destination-1.jpg";
import destination2 from "./img/destination-2.jpg";
import destination3 from "./img/destination-3.jpg";
import destination4 from "./img/destination-4.jpg";
import destination5 from "./img/destination-5.jpg";
import destination6 from "./img/destination-6.jpg";

function Destination() {
  return (
    <div id="destino" className="container-fluid py-5">
    <div className="container pt-5 pb-3">
      <div className="text-center mb-3 pb-3">
        <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Destinos</h6>
        <h1>Destinos mais frequentes</h1>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="destination-item position-relative overflow-hidden mb-2">
            <img className="img-fluid" src={destination1} alt />
            <a className="destination-overlay text-white text-decoration-none" href>
              <h5 className="text-white">Luanda</h5>
              <span>100 cidades</span>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="destination-item position-relative overflow-hidden mb-2">
            <img className="img-fluid" src={destination2} alt />
            <a className="destination-overlay text-white text-decoration-none" href>
              <h5 className="text-white">Malange</h5>
              <span>100 Cidades</span>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="destination-item position-relative overflow-hidden mb-2">
            <img className="img-fluid" src={destination3} alt />
            <a className="destination-overlay text-white text-decoration-none" href>
              <h5 className="text-white">Uíge</h5>
              <span>100 Cidades</span>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="destination-item position-relative overflow-hidden mb-2">
            <img className="img-fluid" src={destination4} alt />
            <a className="destination-overlay text-white text-decoration-none" href>
              <h5 className="text-white">Huíla</h5>
              <span>100 Cidades</span>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="destination-item position-relative overflow-hidden mb-2">
            <img className="img-fluid" src={destination5} alt />
            <a className="destination-overlay text-white text-decoration-none" href>
              <h5 className="text-white">Benguela</h5>
              <span>100 Cidades</span>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="destination-item position-relative overflow-hidden mb-2">
            <img className="img-fluid" src={destination6} alt />
            <a className="destination-overlay text-white text-decoration-none" href>
              <h5 className="text-white">Huambo</h5>
              <span>100 Cidades</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Destination
