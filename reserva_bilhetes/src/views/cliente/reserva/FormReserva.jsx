

import React from 'react'

import {useParams} from "react-router-dom"

function FormReserva() {


  const { origem, destino } = useParams()


  return (
    <div className="container-fluid booking" >
    <div className="container pb-5" style={{marginTop:"12%"}}>
      <div className="bg-light shadow" style={{padding: 30}}>
        <div className="row align-items-center" style={{minHeight: 60}}>
          <div className="col-md-12">
            <div className="row">

              <div className="col-md-6">
                <div className="mb-3 mb-md-0">
                    <label>
                        De
                        <input className="form-control  px-4" value={origem} style={{height: 47}}/>
                          
                    </label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3 mb-md-0">                
                    <label>
                        Para
                        <input type="text" className="form-control px-4" value={destino}  style={{height: 47}}/>
                    </label>                  
                </div>
              </div>

           
            </div>
          </div>
          <div className="col-md-2" hidden>
            <button className="btn buttonColorBackground btn-block" type="button" role='button' style={{height: 47, marginTop: '-2px'}}>Submeter</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FormReserva
