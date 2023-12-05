import { AuthContext } from 'functions/context'
import React, { useContext } from 'react'
import { Card, CardBody, CardHeader, CardTitle } from 'reactstrap'

function Resumo() {
    const { viagemReservada } = useContext(AuthContext)

    console.log(viagemReservada)
    return (
        <div className='container pb-5' style={{ marginTop: '10%' }}>

            <Card>
                <CardHeader>
                    <CardTitle>
                        <h1> Resumo da viagem</h1>
                    </CardTitle>
                </CardHeader>
            
                    
                <CardBody >
                <div className='d-flex'>
                    <span className='font-font-weight-bold px px-3 '>{viagemReservada?.origem} -  {viagemReservada?.destino}</span>
                    <span className='font-font-weight-bold px px-3 '>Duração -  {viagemReservada?.duracao}</span>
                </div>
                <div className='d-flex row'>
                    <div className='d-flex flex-xl-column py-3 px-3 ' style={{ gap: '2rem' }}>
                        <span>🌑</span>
                        <span>🕚</span>
                        <span>🌑</span>
                    </div>

                    <div className='d-flex flex-xl-column py-3 px-3 ' style={{ gap: '2rem' }}>
                        <span>{viagemReservada?.horario_id}:00</span>
                        <span>{viagemReservada?.duracao}:00</span>
                        <span>12:00</span>
                    </div>

                    <div className='d-flex flex-xl-column py-3 px-3 font-weight-bold col-md-4' style={{ gap: '2rem' }}>
                        <span >{viagemReservada?.origem}</span>
                        <span>.</span>

                        <span>{viagemReservada?.destino}</span>

                    </div>

                    <div className='d-flex flex-xl-column py-3 px-3 font-weight-bold ml-5' style={{ gap: '2rem', fontSize: '1.5rem' }}>
                        <span className='mt-5'>1 Passageiro</span>
                    </div>

                    <div className='d-flex flex-xl-column py-3 px-3 font-weight-bold ml-5' style={{ gap: '2rem', fontSize: '1.5rem' }}>

                        <span className='mt-5'> {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "kzs",
                        }).format(Number(viagemReservada?.preco?viagemReservada.preco:0))}</span>

                    </div>


                </div>
            </CardBody>
           
            </Card>
        </div>
    )
}

export default Resumo
