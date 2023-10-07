import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardBody } from 'reactstrap'


function ReservaOptions() {
    const navigate = useNavigate();
  return (
    <div className='container pb-5'>
      <Card>
        <CardBody className='d-flex row'>
            <div className='d-flex flex-xl-column py-3 px-3      ' style={{gap:'2rem'}}> 
                <span>🌑</span>
                <span>🕚</span>
                <span>🌑</span>
            </div>

            <div className='d-flex flex-xl-column py-3 px-3  ' style={{gap:'2rem'}}> 
                <span>08:00</span>
                <span>04:00</span>
                <span>12:00</span>
            </div>

            <div className='d-flex flex-xl-column py-3 px-3 font-weight-bold col-md-4 ' style={{gap:'2rem'}}> 
                <span >Terminal do Gamek</span>
                <span>3 escalas</span>
                
            </div>

            <div className='d-flex flex-xl-column py-3 px-3 font-weight-bold ml-5' style={{gap:'2rem',fontSize:'1.5rem'}}> 
                
                <span className='mt-5'>5500 AOA</span>
                
            </div>

            <div className='d-flex flex-xl-column py-3 px-3 font-weight-bold ml-5' style={{gap:'2rem'}}> 
                 <button className="btn btn-primary  mt-5" type="button" role='button' >Reservar</button>
                         
            </div>
        </CardBody>
      </Card>

      <Card>
        <CardBody className='d-flex row'>
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
                <span >Terminal de Luanda Viana - estalagem</span>
                <span>3 escalas</span>
                
            </div>

            <div className='d-flex flex-xl-column py-3 px-3 font-weight-bold ml-5' style={{gap:'2rem',fontSize:'1.5rem'}}> 
                
                <span className='mt-5'>5500 AOA</span>
                
            </div>

            <div className='d-flex flex-xl-column py-3 px-3 font-weight-bold ml-5' style={{gap:'2rem'}}> 
                 <button className="btn btn-primary  mt-5" type="button" role='button' >Reservar</button>
                         
            </div>
        </CardBody>
      </Card>

      <Card>
        <CardBody className='d-flex row'>
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
                <span >Terminal de Luanda Golf2</span>
                <span>3 escalas</span>
                
            </div>

            <div className='d-flex flex-xl-column py-3 px-3 font-weight-bold ml-5' style={{gap:'2rem',fontSize:'1.5rem'}}> 
                
                <span className='mt-5'>5500 AOA</span>
                
            </div>

            <div className='d-flex flex-xl-column py-3 px-3 font-weight-bold ml-5' style={{gap:'2rem'}}> 
                 <button className="btn btn-primary  mt-5" type="button" role='button' >Reservar</button>
                         
            </div>
        </CardBody>
      </Card>

      <Card>
        <CardBody className='d-flex row'>
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
                <span >Terminal de Luanda Zango</span>
                <span>3 escalas</span>
                
            </div>

            <div className='d-flex flex-xl-column py-3 px-3 font-weight-bold ml-5' style={{gap:'2rem',fontSize:'1.5rem'}}> 
                
                <span className='mt-5'>5500 AOA</span>
                
            </div>

            <div className='d-flex flex-xl-column py-3 px-3 font-weight-bold ml-5' style={{gap:'2rem'}}> 
                 <button className="btn btn-primary  mt-5" type="button" role='button' >Reservar</button>
                         
            </div>
        </CardBody>
      </Card>

      <Card>
      <div className='d-flex py-3 px-3 font-weight-bold ml-5'> 
         <button onClick={()=>navigate("/resumoViagem")} className="btn btn-primary col-md-5 py-3" type="button" role='button' >Finalizar</button>    
     </div>
      </Card>
    </div>
  )
}

export default ReservaOptions
