import { AuthContext } from 'functions/context';
import React, { useContext, useState } from 'react'

import { useNavigate } from 'react-router-dom'

function BokingStart() {
    const navigate = useNavigate();
    const {rotas}=useContext(AuthContext)

    const[origem,setOrigem]=useState()
    const [destino,setDestino]=useState()

    function handleReserva(){
      navigate(`/reserva/origem/${origem}/destino/${destino}`)
    }
    
  return (
    <div className="container-fluid booking mt-5 pb-5">
    <div className="container pb-5">
      <div className="bg-light shadow" style={{padding: 30}}>
        <div className="row align-items-center" style={{minHeight: 60}}>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3 mb-md-0">
                  <select className="custom-select px-4" style={{height: 47}} value={origem} onChange={e=>setOrigem(e.target.value)}>
                    <option selected>Origem</option>

                    {rotas?.map((rota)=>(
                         <option value={rota.origem}>{rota.origem}</option>
                    ))}
                 
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3 mb-md-0">
                  <select className="custom-select px-4" style={{height: 47}} value={destino} onChange={e=>setDestino(e.target.value)}>
                    <option selected>Destino</option>

                    {rotas?.map((rota)=>(
                         <option value={rota.rota}>{rota.destino}</option>
                    ))}
                 
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <button onClick={handleReserva} className="btn buttonColorBackground  btn-block" type="button" role='button' style={{height: 47, marginTop: '-2px'}}>Submeter</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BokingStart
