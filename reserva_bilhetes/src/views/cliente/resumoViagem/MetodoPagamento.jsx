

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Form, Row } from 'reactstrap'

import mcEXP from "./mcexpress.png"
import unitel from "./unitelmane.jpg"
import pagamentoPorReferencia from "./pagamentoReferecia.jpg"

function MetodoPagamento() {

  const navigate = useNavigate()
  return (
    <div className='container'>
        <Card>
          <CardHeader>
              <h2>Metódo de pagamento</h2>
          </CardHeader>

          <CardBody >
            <Form  >              
              
                  <div className='px-3 d-flex ' style={{gap:"1rem", fontSize:'1.5rem'}}>

                      <input type="radio" name="pagamento" id="mExpress" />
                      <label htmlFor="mExpress"><img src={mcEXP} style={{height:50}}/></label>
                      
                      <input type="radio" name="pagamento" id="unitelMoney" />
                      <label htmlFor="unitelMoney"><img src={unitel} style={{height:50}}/></label>
                  
                      <input type="radio" name="pagamento" id="pReferencia" /> 
                      <label htmlFor="pReferencia"><img src={pagamentoPorReferencia} style={{height:50}}/></label>
                      
                     
                      
                  </div>

                  <Row>
                      <label className='col-md-12 py-2'>
                          Nº do telefone
                        <input className='form-control mt-3  px-3 py-4' name="sobreNomePassageiro" placeholder='Telefone...'/>
                      </label>

                      <button onClick={()=>navigate("/recibo")} className='btn btn-primary col-md-4  ml-3' type='button' role='button'>Pagar</button>
                  </Row>
            </Form>
          </CardBody>
       </Card>
    </div>
  )
}

export default MetodoPagamento
