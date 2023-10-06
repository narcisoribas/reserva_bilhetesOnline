import React from 'react'

function Services() {
  return (
    <div className="container-fluid py-5" id='servico'>
    <div className="container pt-5 pb-3">
      <div className="text-center mb-3 pb-3">
        <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Serviços</h6>
        <h1>Tourismo &amp; Serciços de viagens</h1>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 mb-4">
          <div className="service-item bg-white text-center mb-2 py-5 px-4">
            <i className="fa fa-2x fa-route mx-auto mb-4" />
            <h5 className="mb-2">Guia de viagens</h5>
            <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
          </div>
        </div>
    
        <div className="col-lg-6 col-md-6 mb-4">
          <div className="service-item bg-white text-center mb-2 py-5 px-4">
            <i className="fa fa-2x fa-hotel mx-auto mb-4" />
            <h5 className="mb-2">Hoteis</h5>
            <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Services
