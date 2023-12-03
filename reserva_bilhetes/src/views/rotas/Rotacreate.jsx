
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
/*
"origem": "Huambo",
	"destino": "Benguela",  
	"horario_id" : 1, 
	"preco":10200 ,
	"extensao" :"615KM", 
	"duracao" : "11 HORAS" , 
	"n_paragem" : "6", 
	"total_ocupantes" : 48,
	"desconto" :0, 
	"local_embarque_id" : 1,
	"estado" : "DISPONVEL"*/


const AddRota = () => {

      const {rotas,createRotas,horario,embargue}=useContext(AuthContext)
      const [origem,setorigem]=useState()
      const [destino,setDestino]=useState()
      const[horario_id,setHorario_id]=useState()
      const [horarioChegada,setHorarioChegada]=useState()
      const [preco,setPreco]=useState()
      const [extensao,setExtensao]=useState()
      const [duracao,setDuracao]=useState()
      const[n_paragem,setNumeroParagem]=useState()
      const [desconto,setDesconto]=useState()
      const [estado,setEstado]=useState()
      const [total_ocupantes,setTotal_ocupantes]=useState()
      const [local_embarque_id,setLocal_embarque_id]=useState()
    

      async function handleCreateRota(){
        try {
          await createRotas({total_ocupantes,local_embarque_id,origem,destino,horario_id,preco,extensao,duracao,n_paragem,desconto,estado})
          setLocal_embarque_id("")
          setTotal_ocupantes("")
          setEstado("")
          setDesconto("")
          setNumeroParagem("")
          setDuracao("")
          setExtensao("")
          setPreco("")
          setHorario_id("")
          setDestino("")
          setorigem("")
          setDesconto("")
       
        } catch (error) {
          alert("Erro inesperado, tente novamente!")
        }
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
              <FormGroup className="col-md-4">
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input value={origem} onChange={e=>setorigem(e.target.value)} placeholder="Origem" type="text" className="px-3" />
                </InputGroup>
              </FormGroup>

              <FormGroup className="col-md-4">
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input value={destino} onChange={e=>setDestino(e.target.value)} placeholder="Destino" type="text" className="px-3" />
                </InputGroup>
              </FormGroup>


              
              <FormGroup className="col-md-4">
                <InputGroup className="input-group-alternative">
                  <Input
                  value={extensao} onChange={e=>setExtensao(e.target.value)}
                    className="px-3"
                    placeholder="Extensao"
                    type="text"
                    
                  />
                </InputGroup>
              </FormGroup>


              <FormGroup className="col-md-4">
                <InputGroup className="input-group-alternative mb-3">             
                   
                  <select
                    value={horario_id} onChange={e=>setHorario_id(e.target.value)}
                    className="px-3 form-control"
                    placeholder="Horario"
                    type="time"
                    autoComplete="new-email"
                  >

                  <option>---- horario -----</option>
                  {horario?.map((data)=>(
                   
                    <option key={data.id} value={data.id}>{data.hora}</option>
                  ))}


                    </select>
                </InputGroup>
              </FormGroup>




              <FormGroup className="col-md-4">
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
                    type="text"
                    
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup className="col-md-4">
                <InputGroup className="input-group-alternative">
                 
                  <select
                    value={local_embarque_id} onChange={e=>setLocal_embarque_id(e.target.value)}
                    className="px-3 form-control"
                    placeholder="Local de embargue">

                      <option>---Local de embargue----</option>

                      {embargue?.map((data)=>(
                        <option value={data?.id} key={data?.id}>{data.nomeLocal}</option>
                      ))}

                    </select>
                </InputGroup>
              </FormGroup>

          
              </Row>
              <Row>

              
            
              <FormGroup className="col-md-4">
                <InputGroup className="input-group-alternative">
                 
                  <Input
                    value={n_paragem} onChange={e=>setNumeroParagem(e.target.value)}
                    className="px-3"
                    placeholder="Número de paragens"
                  
                   
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup className="col-md-4">
                <InputGroup className="input-group-alternative">
                 
                  <Input
                    value={preco} onChange={e=>setPreco(e.target.value)}
                    className="px-3"
                    placeholder="Preço"
                  
                   
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup className="col-md-4">
                <InputGroup className="input-group-alternative">
                 
                  <Input
                    value={desconto} onChange={e=>setDesconto(e.target.value)}
                    className="px-3"
                    placeholder="Desconto"
                  
                   
                  />
                </InputGroup>
              </FormGroup>


            
              </Row>

              <Row>

                
              <FormGroup className="col-md-6">
                <InputGroup className="input-group-alternative">
                 
                  <Input
                    value={estado} onChange={e=>setEstado(e.target.value)}
                    className="px-3"
                    placeholder="Estado"
                  
                   
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup className="col-md-6">
                <InputGroup className="input-group-alternative">
                 
                  <Input
                    value={total_ocupantes} onChange={e=>setTotal_ocupantes(e.target.value)}
                    className="px-3"
                    placeholder="Ocupantes"
                  
                   
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
