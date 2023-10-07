import "./../lib/owlcarousel/assets/owl.carousel.min.css"
import "./../lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
import "./../css/style.css"
import "./../css/style.min.css"


import React, { Fragment } from 'react'
import NavBar from "../NavBar"
import FormReserva from "./FormReserva"
import ReservaOptions from "./ReservaOptions"

function Reserva() {
  return (
   <Fragment>
      <NavBar/>
      <FormReserva/>
      <ReservaOptions/>
    
   </Fragment>
  )
}

export default Reserva
