import "./../lib/owlcarousel/assets/owl.carousel.min.css"
import "./../lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
import "./../css/style.css"
import "./../css/style.min.css"


import React, { Fragment } from 'react'
import NavBar from "../NavBar"
import Resumo from "./Resumo"
import MetodoPagamento from "./MetodoPagamento"




function ResumoDaViagem() {
  return (
   <div className="pb-6">
      <NavBar/>      
      <Resumo/>
      <MetodoPagamento/>
    
   </div>
  )
}

export default ResumoDaViagem;
