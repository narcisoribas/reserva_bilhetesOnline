import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import destination1 from "./img/destination-1.jpg";
import destination2 from "./img/malange.jfif";
import destination3 from "./img/uige.jfif";
import destination4 from "./img/huila.jfif";
import destination5 from "./img/benguela.jfif";
import destination6 from "./img/huambo.jfif";
import { AuthContext } from 'functions/context';

function Destination() {
  const navigate = useNavigate();
  const { rotas } = useContext(AuthContext)

  console.log(rotas)
  return (
    <div id="destino" className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-3 pb-3">
          <h6 className="myColorText text-uppercase" style={{ letterSpacing: 5 }}>Destinos</h6>
          <h1>Destinos mais frequentes</h1>
        </div>
        <div className="row">

          {rotas?.map(destino => (
          
              <div className="col-lg-4 col-md-6 mb-4" onClick={() => navigate(`/reserva/origem/${destino?.origem}/destino/${destino?.destino}`)}>
                <div className="destination-item position-relative overflow-hidden mb-2">
                  <img className="img-fluid" src={"http://127.0.0.1:8000/"+destino?.image} alt />
                  <a className="destination-overlay text-white text-decoration-none" href>
                    <h5 className="text-white">{destino?.destino}</h5>
                   
                  </a>
                </div>
              </div>
             

            
          ))}

        </div>
      </div>
    </div>
  )
}

export default Destination
