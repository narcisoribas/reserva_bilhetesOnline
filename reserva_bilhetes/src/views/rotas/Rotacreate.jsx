/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  FormGroup,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

import {
  Button, 
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,  
  Col
} from "reactstrap";
import { useContext, useState } from "react";
import { AuthContext } from "functions/context";


const AddRota = () => {

      const {rotas,createRotas}=useContext(AuthContext)
      const [nomeRota,setNomeRota]=useState()
      const[horarioPartida,setHorarioPartida]=useState()
      const [horarioChegada,setHorarioChegada]=useState()
      const [preco,setPreco]=useState()
      const [extensao,setExtensao]=useState()
      const [duracao,setDuracao]=useState()
      const[n_paragem,setNumeroParagem]=useState()
      const [desconto,setDesconto]=useState()
      const [estado,setEstado]=useState()
    

      async function handleCreateRota(){
        await createRotas({nomeRota,horarioChegada,horarioPartida,preco,extensao,duracao,n_paragem,desconto,estado})
      }


  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--4" fluid>
        {/* Table */}
        <Row>
          <div className="col-md-12">
            <Card className="shadow">
            <Form role="form" className="px-4 py-5">
              <Row>
              <FormGroup className="col-md-6">
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input value={nomeRota} onChange={e=>setNomeRota(e.target.value)} placeholder="Nome da rota" type="text" className="px-3" />
                </InputGroup>
              </FormGroup>
              <FormGroup className="col-md-3">
                <InputGroup className="input-group-alternative mb-3">             
                   
                  <Input
                    value={horarioPartida} onChange={e=>setHorarioPartida(e.target.value)}
                    className="px-3"
                    placeholder="Horario de partida"
                    type="time"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup className="col-md-3">
                <InputGroup className="input-group-alternative mb-3">             
                   
                  <Input
                  
                  value={horarioChegada} onChange={e=>setHorarioChegada(e.target.value)}
                    className="px-3"
                    placeholder="Horario de chegada"
                    type="time"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              </Row>
              <Row>
              <FormGroup className="col-md-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                  value={duracao} onChange={e=>setDuracao(e.target.value)}
                    className="px-3"
                    placeholder="Duracao"
                    type="time"
                    
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup className="col-md-3">
                <InputGroup className="input-group-alternative">
                  <Input
                  value={extensao} onChange={e=>setExtensao(e.target.value)}
                    className="px-3"
                    placeholder="Extensao"
                    type="text"
                    
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup className="col-md-3">
                <InputGroup className="input-group-alternative">
                 
                  <Input
                    value={n_paragem} onChange={e=>setNumeroParagem(e.target.value)}
                    className="px-3"
                    placeholder="Número de paragens"
                  
                   
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup className="col-md-3">
                <InputGroup className="input-group-alternative">
                 
                  <Input
                    value={preco} onChange={e=>setPreco(e.target.value)}
                    className="px-3"
                    placeholder="Preço"
                  
                   
                  />
                </InputGroup>
              </FormGroup>
              </Row>
             
             
              <div className="text-center">
                <Button onClick={handleCreateRota} className="mt-4" color="primary" type="button">
                  Salvar
                </Button>
              </div>
            </Form>
            </Card>
          </div>
        </Row>
    
      </Container>
    </>
  );
};

export default AddRota;
