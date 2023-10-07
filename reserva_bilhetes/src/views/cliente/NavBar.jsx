import React, { Fragment } from 'react'

function NavBar() {
  return (
    <Fragment>
      {/* Topbar Start */}
  <div className="container-fluid bg-light pt-3 d-none d-lg-block fixed-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
          <div className="d-inline-flex align-items-center">
            <p><i className="fa fa-envelope mr-2" />info@example.com</p>
            <p className="text-body px-3">|</p>
            <p><i className="fa fa-phone-alt mr-2" />+244 999 999 999</p>
          </div>
        </div>
        <div className="col-lg-6 text-center text-lg-right">
          <div className="d-inline-flex align-items-center">
            <a className="text-primary px-3" href>
              <i className="fab fa-facebook-f" />
            </a>
            <a className="text-primary px-3" href>
              <i className="fab fa-twitter" />
            </a>
            <a className="text-primary px-3" href>
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="text-primary px-3" href>
              <i className="fab fa-instagram" />
            </a>
            <a className="text-primary pl-3" href>
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <div className="container-fluid position-relative nav-bar p-0 fixed-top mt-lg-5" >
    <div className="container-lg position-relative p-0 px-lg-3 " style={{zIndex: 9}}>
      <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
        <a href className="navbar-brand">
          <h1 className="m-0 text-primary"><span className="text-dark">H</span>EXPRESSO</h1>
        </a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
          <div className="navbar-nav ml-auto py-0">
            <a href="#home" className="nav-item nav-link active">Home</a>
            <a href="#about" className="nav-item nav-link">Sobre</a>
            <a href="#destino" className="nav-item nav-link">Destino</a>
            <a href="#servico" className="nav-item nav-link">Serviços</a>
            <a href="/auth/login" className="nav-item nav-link">Login</a>
            
            
            <a href="#contact" className="nav-item nav-link">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  </div>
  {/* Navbar End */}
    </Fragment>
  )
}

export default NavBar
