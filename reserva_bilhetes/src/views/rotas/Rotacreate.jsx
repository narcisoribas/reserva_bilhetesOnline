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


const AddRota = () => {
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
                  <Input placeholder="Nome da rota" type="text" className="px-3" />
                </InputGroup>
              </FormGroup>
              <FormGroup className="col-md-3">
                <InputGroup className="input-group-alternative mb-3">             
                   
                  <Input
                    className="px-3"
                    placeholder="Horario de partida"
                    type="text"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup className="col-md-3">
                <InputGroup className="input-group-alternative mb-3">             
                   
                  <Input
                    className="px-3"
                    placeholder="Horario de chegada"
                    type="text"
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
                    className="px-3"
                    placeholder="Duracao"
                    type="text"
                    
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup className="col-md-3">
                <InputGroup className="input-group-alternative">
                  <Input
                    className="px-3"
                    placeholder="Extensao"
                    type="text"
                    
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup className="col-md-6">
                <InputGroup className="input-group-alternative">
                 
                  <Input
                    className="px-3"
                    placeholder="Número de paragens"
                    type="number"
                    min={1}
                  />
                </InputGroup>
              </FormGroup>
              </Row>
             
             
              <div className="text-center">
                <Button className="mt-4" color="primary" type="button">
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
