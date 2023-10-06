import React from 'react'

import testimonial1 from "./img/testimonial-1.jpg"
import testimonial2 from "./img/testimonial-2.jpg"
import testimonial3 from "./img/testimonial-3.jpg"
import testimonial4 from "./img/testimonial-4.jpg"

function Testimonial() {
  return (
    <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="text-center mb-3 pb-3">
        <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Testemunhos</h6>
        <h1>O que os nossos clientes dizem</h1>
      </div>
      <div className="owl-carousel testimonial-carousel">
        <div className="text-center pb-4">
          <img className="img-fluid mx-auto" src={testimonial1} style={{width: 100, height: 100}} />
          <div className="testimonial-text bg-white p-4 mt-n5">
            <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
            </p>
            <h5 className="text-truncate">Client Name</h5>
            <span>Profession</span>
          </div>
        </div>
        <div className="text-center">
          <img className="img-fluid mx-auto" src={testimonial2} style={{width: 100, height: 100}} />
          <div className="testimonial-text bg-white p-4 mt-n5">
            <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
            </p>
            <h5 className="text-truncate">Client Name</h5>
            <span>Profession</span>
          </div>
        </div>
        <div className="text-center">
          <img className="img-fluid mx-auto" src={testimonial3} style={{width: 100, height: 100}} />
          <div className="testimonial-text bg-white p-4 mt-n5">
            <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
            </p>
            <h5 className="text-truncate">Client Name</h5>
            <span>Profession</span>
          </div>
        </div>
        <div className="text-center">
          <img className="img-fluid mx-auto" src={testimonial4} style={{width: 100, height: 100}} />
          <div className="testimonial-text bg-white p-4 mt-n5">
            <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
            </p>
            <h5 className="text-truncate">Client Name</h5>
            <span>Profession</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Testimonial
