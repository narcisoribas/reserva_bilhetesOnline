import React from 'react'



import "./lib/owlcarousel/assets/owl.carousel.min.css"
import "./lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
import "./css/style.css"
import "./css/style.min.css"


import carrosel1 from "./img/carousel-1.jpg"
import carrosel2 from "./img/carousel-2.jpg"
import About from './About'
import Destination from './Destination'
import Services from './Services'
import PackagesServices from './PackagesServices'
import Testimonial from './Testimonial'
import Footer from './Footer'

function Home() {
  return (

<div id='home'>
  {/* Topbar Start */}
  <div className="container-fluid bg-light pt-3 d-none d-lg-block">
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
  <div className="container-fluid position-relative nav-bar p-0">
    <div className="container-lg position-relative p-0 px-lg-3" style={{zIndex: 9}}>
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
  {/* Carousel Start */}
  <div className="container-fluid p-0">
    <div id="header-carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="w-100" src={carrosel1} alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{maxWidth: 900}}>
              <h4 className="text-white text-uppercase mb-md-3">Viagem &amp; Turismo</h4>
              <h1 className="display-3 text-white mb-md-4">Vamos juntos descobrir Angola</h1>
              <a href className="btn btn-primary py-md-3 px-md-5 mt-2">Agora</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="w-100" src={carrosel2} alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{maxWidth: 900}}>
              <h4 className="text-white text-uppercase mb-md-3">Viagem &amp; Turismo </h4>
              <h1 className="display-3 text-white mb-md-4">Decubra lugares incríveis conosco</h1>
              <a href className="btn btn-primary py-md-3 px-md-5 mt-2">Agora</a>
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
  {/* Carousel End */}
  {/* Booking Start */}
  <div className="container-fluid booking mt-5 pb-5">
    <div className="container pb-5">
      <div className="bg-light shadow" style={{padding: 30}}>
        <div className="row align-items-center" style={{minHeight: 60}}>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-3">
                <div className="mb-3 mb-md-0">
                  <select className="custom-select px-4" style={{height: 47}}>
                    <option selected>Destino</option>
                    <option value={1}>Destination 1</option>
                    <option value={2}>Destination 1</option>
                    <option value={3}>Destination 1</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3 mb-md-0">
                  <div className="date" id="date1" data-target-input="nearest">
                    <input type="date" className="form-control p-4 datetimepicker-input" placeholder="Depart Date" data-target="#date1" data-toggle="datetimepicker" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3 mb-md-0">
                  <div className="date" id="date2" data-target-input="nearest">
                    <input type="date" className="form-control p-4 datetimepicker-input" placeholder="Return Date" data-target="#date2" data-toggle="datetimepicker" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3 mb-md-0">
                  <select className="custom-select px-4" style={{height: 47}}>
                    <option selected>Duração</option>
                    <option value={1}>Duration 1</option>
                    <option value={2}>Duration 1</option>
                    <option value={3}>Duration 1</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary btn-block" type="submit" style={{height: 47, marginTop: '-2px'}}>Submeter</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Booking End */}
  {/* About Start */}
    <About/>
  {/* About End */}
  {/* Feature Start */}
  <div className="container-fluid pb-5">
    <div className="container pb-5">
      <div className="row">
        <div className="col-md-4">
          <div className="d-flex mb-4 mb-lg-0">
            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{height: 100, width: 100}}>
              <i className="fa fa-2x fa-money-check-alt text-white" />
            </div>
            <div className="d-flex flex-column">
              <h5 className>Preços competivos</h5>
              <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex mb-4 mb-lg-0">
            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{height: 100, width: 100}}>
              <i className="fa fa-2x fa-award text-white" />
            </div>
            <div className="d-flex flex-column">
              <h5 className>Melhores serviços</h5>
              <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex mb-4 mb-lg-0">
            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{height: 100, width: 100}}>
              <i className="fa fa-2x fa-globe text-white" />
            </div>
            <div className="d-flex flex-column">
              <h5 className>Segurança em primeiro lugar</h5>
              <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Feature End */}
  {/* Destination Start */}
    <Destination/>
  {/* Destination Start */}
  {/* Service Start */}
    <Services/>
  {/* Service End */}
  {/* Packages Start 
      <PackagesServices/>
   Packages End */}

  {/* Registration Start */}
  <div className="container-fluid bg-registration py-5" style={{margin: '90px 0'}}>
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-7 mb-5 mb-lg-0">
         
          <p className="text-white">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
            ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
            dolor</p>
          <ul className="list-inline text-white m-0">
            <li className="py-2"><i className="fa fa-check text-primary mr-3" />Labore eos amet dolor amet diam</li>
            <li className="py-2"><i className="fa fa-check text-primary mr-3" />Etsea et sit dolor amet ipsum</li>
            <li className="py-2"><i className="fa fa-check text-primary mr-3" />Diam dolor diam elitripsum vero.</li>
          </ul>
        </div>
        <div className="col-lg-5">
          <div className="card border-0">
            <div className="card-header bg-primary text-center p-4">
              <h1 className="text-white m-0">Crie uma conta</h1>
            </div>
            <div className="card-body rounded-bottom bg-white p-5">
              <form>
                <div className="form-group">
                  <input type="text" className="form-control p-4" placeholder="Teu nome" required="required" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control p-4" placeholder="Teu email" required="required" />
                </div>
                <div className="form-group">
                  <select className="custom-select px-4" style={{height: 47}}>
                    <option selected>Select a destination</option>
                    <option value={1}>destination 1</option>
                    <option value={2}>destination 1</option>
                    <option value={3}>destination 1</option>
                  </select>
                </div>
                <div>
                  <button className="btn btn-primary btn-block py-3" type="submit">Registrar-se</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Registration End */}
  

  {/* Testimonial Start 
  <Testimonial/>
  Testimonial End */}
 
  {/* Footer Start */}
    <Footer/>
</div>


  )
}

export default Home
