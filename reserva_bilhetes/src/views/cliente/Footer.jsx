import React from 'react'

import logo from "./img/logo_white.png"

function Footer() {
  return (
    <div>
        <div className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" style={{marginTop: 90}}>
    <div className="row pt-5">
      <div className="col-lg-3 col-md-6 mb-5">
        <a href className="navbar-brand">
          <h1 className="text-primary"><img src={logo} /></h1>
        </a>
        <p>Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet labore rebum lorem ipsum dolor. No sed vero lorem dolor dolor</p>
        <h6 className="text-white text-uppercase mt-4 mb-3" style={{letterSpacing: 5}}>Siga-nos</h6>
        <div className="d-flex justify-content-start">
          <a className="btn btn-square mr-2" href="#" style={{border:"1px solid #6f42c1"}}><i className="fab fa-twitter" /></a>
          <a className="btn  btn-square mr-2"  style={{border:"1px solid #6f42c1"}} href="#"><i className="fab fa-facebook-f" /></a>
          <a className="btn  btn-square mr-2"  style={{border:"1px solid #6f42c1"}} href="#"><i className="fab fa-linkedin-in" /></a>
          <a className="btn  btn-square"  style={{border:"1px solid #6f42c1"}} href="#"><i className="fab fa-instagram" /></a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h5 className="text-white text-uppercase mb-4" style={{letterSpacing: 5}}>Menu</h5>
        <div className="d-flex flex-column justify-content-start">
          <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2" />Sobre</a>
          <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2" />Destinos</a>
          <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2" />Serviços</a>
       
        </div>
      </div>
    
      <div className="col-lg-3 col-md-6 mb-5">
        <h5 className="text-white text-uppercase mb-4" style={{letterSpacing: 5}}>Contacte-nos</h5>
        <p><i className="fa fa-map-marker-alt mr-2" />Gamek, Luanda, Angola</p>
        <p><i className="fa fa-phone-alt mr-2" />+244 999 999 999</p>
        <p><i className="fa fa-envelope mr-2" />info@example.com</p>
        
      </div>
    </div>
  </div>
  <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{borderColor: 'rgba(256, 256, 256, .1) !important'}}>
    <div className="row">
      <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
        <p className="m-0 text-white-50">Copyright © <a href="#">Domain</a>. Todos os direitos reservados.
        </p>
      </div>
      <div className="col-lg-6 text-center text-md-right">
        <p className="m-0 text-white-50">Criado por <a href="https://freewebsitecode.com">Faustino Melo</a>
        </p>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg buttonColorBackground btn-lg-square back-to-top"><i className="fa fa-angle-double-up" /></a>
  {/* JavaScript Libraries */}
  {/* Contact Javascript File */}
  {/* Template Javascript */}
    </div>
  )
}

export default Footer
