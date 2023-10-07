

import React from 'react'

function FormReserva() {
  return (
    <div className="container-fluid booking  pb-5" >
    <div className="container pb-5" style={{marginTop:"9%"}}>
      <div className="bg-light shadow" style={{padding: 30}}>
        <div className="row align-items-center" style={{minHeight: 60}}>
          <div className="col-md-12">
            <div className="row">

              <div className="col-md-3">
                <div className="mb-3 mb-md-0">
                    <label>
                        De
                        <input className="form-control px-4" value={"Luanda"} style={{height: 47}}/>
                          
                    </label>
                </div>
              </div>

              <div className="col-md-3">
                <div className="mb-3 mb-md-0">                
                    <label>
                        Para
                        <input type="text" className="form-control px-4" value={"Uige"}  style={{height: 47}}/>
                    </label>                  
                </div>
              </div>

              <div className="col-md-3">
                <div className="mb-3 mb-md-0">
                  <label>
                     Partida
                     <input type="date" className="form-control p-4 datetimepicker-input" placeholder="Return Date" data-target="#date2" data-toggle="datetimepicker" />
                  </label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3 mb-md-0">
                  <label>
                     Regresso
                     <input type="date" className="form-control p-4 datetimepicker-input" placeholder="Return Date" data-target="#date2" data-toggle="datetimepicker" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2" hidden>
            <button className="btn btn-primary btn-block" type="button" role='button' style={{height: 47, marginTop: '-2px'}}>Submeter</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FormReserva
