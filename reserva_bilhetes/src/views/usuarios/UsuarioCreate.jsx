
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


const AddUsuario = () => {

    const {userCreate}=useContext(AuthContext);
    const [email,setEmail]=useState()
    const[name,setName]=useState()
    const [password,setPassword]=useState()


    async function handleCreateUser(){
      if(email !==null && name !== null && password !== null){
        userCreate(name,email,password)
      }else{
        alert("Preencha todos os campos!")
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
                  <Input value={name} onChange={e=>setName(e.target.value)} placeholder="Nome" type="text" className="px-3" />
                </InputGroup>
              </FormGroup>
              <FormGroup className="col-md-6">
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText >
                  </InputGroupAddon>
                  <Input
                   value={email}
                   onChange={e=>setEmail(e.target.value)}
                    className="px-3"
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              </Row>
              <Row>
              <FormGroup className="col-md-6">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                  value={password}
                  onChange={e=>setPassword(e.target.value)}
                    className="px-3"
                    placeholder="Palavra passe"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>

             
              </Row>
              <div className="text-muted font-italic">
                <small>
                  Palavra passe deve ser :{" "}
                  <span className="text-success font-weight-700">Forte</span>
                </small>
              </div>
             
              <div className="text-center">
                <Button onClick={handleCreateUser} className="mt-4" color="primary" type="button">
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

export default AddUsuario;
