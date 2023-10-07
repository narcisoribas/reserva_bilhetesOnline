
import React from 'react'
import { Card, CardBody, CardHeader, Form, Row } from 'reactstrap'

function DadosDoPassageiro() {
  return (
    <div className='container'>
        <Card>
          <CardHeader>
              <h2>Dados do pssageiro</h2>
          </CardHeader>

          <CardBody >
            <Form className='px-3'>
                <Row className='mb-3'>
                    <label className='col-md-6 py-2'>
                      Nome
                    <input className='form-control mt-3   px-3 py-4' name="nomePassageiro" placeholder='Nome...'/>
                    </label>

                    <label className='col-md-6 py-2'>
                      Sobrenome
                    <input className='form-control mt-3  px-3 py-4' name="sobreNomePassageiro" placeholder='SobreNome...'/>
                    </label>
                    
                </Row>

                <Row className='mb-3'>
                    <label className='col-md-6 py-2'>
                      Nacionalidade
                    <input className='form-control mt-3   px-4 py-4' name="nacionalidade" placeholder='Nacionalidade...'/>
                    </label>

                    <label className='col-md-6 py-2'>
                      Genêro
                          <select className="custom-select px-4 mt-3" style={{height: 47}}>
                            <option selected>Genero</option>
                            <option value={1}>Masculino</option>
                            <option value={2}>Femenino</option>                            
                          </select>
                    </label>
                    
                </Row>

                <Row className='mb-3'>
                    <label className='col-md-6 py-2'>
                      Data de nascimento
                    <input  type="date" className='form-control mt-3   px-3 py-4' name="nomePassageiro" />
                    </label>

                    <label className='col-md-6 py-2'>
                      Nº do bilhete
                    <input className='form-control mt-3  px-3 py-4' name="sobreNomePassageiro" placeholder='Bilhete...'/>
                    </label>
                    
                </Row>
            </Form>
          </CardBody>
       </Card>
    </div>
  )
}

export default DadosDoPassageiro
