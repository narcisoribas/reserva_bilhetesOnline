import React from 'react'
import { Card, CardBody, CardHeader, CardTitle } from 'reactstrap'

function Resumo() {
  return (
    <div className='container pb-5' style={{marginTop:'3.5%'}}>     

       <Card>
            <CardHeader>
                <CardTitle>
                   <h1> Resumo da viagem</h1>
                </CardTitle>
            </CardHeader>

            <CardBody >
                <div className='d-flex'> 
                <span className='font-font-weight-bold px px-3 '>Luanda -  Uíge</span>
                <span className='font-font-weight-bold px px-3 '>Duração -  2h00min</span>
                </div>
                <div className='d-flex row'>
                <div className='d-flex flex-xl-column py-3 px-3 ' style={{gap:'2rem'}}> 
                    <span>🌑</span>
                    <span>🕚</span>
                    <span>🌑</span>
                </div>

                <div className='d-flex flex-xl-column py-3 px-3 ' style={{gap:'2rem'}}> 
                    <span>08:00</span>
                    <span>04:00</span>
                    <span>12:00</span>
                </div>

                <div className='d-flex flex-xl-column py-3 px-3 font-weight-bold col-md-4' style={{gap:'2rem'}}> 
                    <span >Luanda</span>
                    <span>.</span>

                    <span>Uíge</span>
                    
                </div>

                <div className='d-flex flex-xl-column py-3 px-3 font-weight-bold ml-5' style={{gap:'2rem',fontSize:'1.5rem'}}> 
                     <span className='mt-5'>1 Passageiro</span>                    
                </div>

                <div className='d-flex flex-xl-column py-3 px-3 font-weight-bold ml-5' style={{gap:'2rem',fontSize:'1.5rem'}}> 
                    
                    <span className='mt-5'>5500 AOA</span>
                    
                </div>

                
                </div>
            </CardBody>
      </Card>
    </div>
  )
}

export default Resumo
