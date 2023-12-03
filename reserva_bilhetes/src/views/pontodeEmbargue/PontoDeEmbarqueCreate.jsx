
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


const PontoDeEmbarqueCreate = () => {

      const {createLocalEmbargue}=useContext(AuthContext)
      const [nomeLocal,setNomeLocal]=useState()
      const [estado,setEstado]=useState()
      
    

      async function handleCreatePontoEmbargue(){
        try {
          await createLocalEmbargue({nomeLocal,estado})
          setNomeLocal("")
          setEstado("")
          
       
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
              <FormGroup className="col-md-6">
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input value={nomeLocal} onChange={e=>setNomeLocal(e.target.value)} placeholder="Local" type="text" className="px-3" />
                </InputGroup>
              </FormGroup>

              <FormGroup className="col-md-6">
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <select value={estado} onChange={e=>setEstado(e.target.value)} placeholder="Estado" type="text" className="px-3 form-control" >
                    <option value="Activo">Activo</option>
                    <option value={"Pendente"}>Pendente</option>
                  </select>
                </InputGroup>
              </FormGroup>


              
            


              



            

          
              </Row>
           

            
             
             
              <div className="text-center">
                <Button onClick={handleCreatePontoEmbargue} className="mt-4" color="primary" type="button">
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

export default PontoDeEmbarqueCreate;
