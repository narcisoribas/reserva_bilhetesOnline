import React from 'react'



import "./lib/owlcarousel/assets/owl.carousel.min.css"
import "./lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
import "./css/style.css"
import "./css/style.min.css"



import About from './About'
import Destination from './Destination'
import Services from './Services'
import PackagesServices from './PackagesServices'
import Testimonial from './Testimonial'
import Footer from './Footer'
import NavBar from './NavBar'
import Carrosel from './Carrosel'
import BokingStart from './BokingStart'

function Home() {
  return (

<div id='home'>
  <NavBar/>
  {/* Carousel Start */}
    <Carrosel/>
  {/* Carousel End */}
  {/* Booking Start */}
    <BokingStart/>
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
            <div className="d-flex flex-shrink-0 align-items-center justify-content-center buttonColorBackground mr-3" style={{height: 100, width: 100}}>
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
            <div className="d-flex flex-shrink-0 align-items-center justify-content-center buttonColorBackground mr-3" style={{height: 100, width: 100}}>
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
            <div className="d-flex flex-shrink-0 align-items-center justify-content-center buttonColorBackground mr-3" style={{height: 100, width: 100}}>
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
  {/* Service Start 
    <Services/>*/}
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
            <li className="py-2"><i className="fa fa-check myColorText mr-3" />Labore eos amet dolor amet diam</li>
            <li className="py-2"><i className="fa fa-check myColorText mr-3" />Etsea et sit dolor amet ipsum</li>
            <li className="py-2"><i className="fa fa-check myColorText mr-3" />Diam dolor diam elitripsum vero.</li>
          </ul>
        </div>
        <div className="col-lg-5">
          <div className="card border-0">
            <div className="card-header buttonColorBackground text-center p-4">
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
                  <button className="btn buttonColorBackground btn-block py-3" type="submit">Registrar-se</button>
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
