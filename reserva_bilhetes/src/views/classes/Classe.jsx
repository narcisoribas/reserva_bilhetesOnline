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
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { Link } from "react-router-dom";

const Classes = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col-md-12">
            <Card className="shadow">
              <CardHeader className="border-0 d-flex space-between">
                <Link to="/admin/addclasses" className="mb-0 btn btn-primary">+ Nova classe</Link>
              </CardHeader>
              <Table className="align-items-center table-flush col-12 px-3" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Classe</th>
                    <th scope="col">Data de criacao</th>
                    <th scope="col">Estado</th>
                  
                    <th>Acção</th>
                 
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Luanda-Malange</td>    
                    <td>5000 kzs</td>            
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        activo
                      </Badge>
                    </td>

                                
                    <td>
                      <div className="d-flex align-items-center">
                        <button className="btn btn-primary">editar</button>
                        <button className="btn btn-danger">Eliminar</button>
                      </div>
                    </td>
                   
                  </tr>
                  <tr>
                    <td>Luanda-Malange</td>    
                    <td>5000 kzs</td>            
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        activo
                      </Badge>
                    </td>

                                
                    <td>
                      <div className="d-flex align-items-center">
                        <button className="btn btn-primary">editar</button>
                        <button className="btn btn-danger">Eliminar</button>
                      </div>
                    </td>
                   
                  </tr>

                  <tr>
                    <td>Luanda-Malange</td>    
                    <td>5000 kzs</td>            
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        activo
                      </Badge>
                    </td>
                
                    <td>
                      <div className="d-flex align-items-center">
                        <button className="btn btn-primary">editar</button>
                        <button className="btn btn-danger">Eliminar</button>
                      </div>
                    </td>
                   
                  </tr>

                  <tr>
                    <td>Luanda-Malange</td>    
                    <td>5000 kzs</td>            
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        activo
                      </Badge>
                    </td>

                                   
                    <td>
                      <div className="d-flex align-items-center">
                        <button className="btn btn-primary">editar</button>
                        <button className="btn btn-danger">Eliminar</button>
                      </div>
                    </td>
                   
                  </tr>

                 
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
    
      </Container>
    </>
  );
};

export default Classes;
