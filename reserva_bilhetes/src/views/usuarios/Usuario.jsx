
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

import { Link } from "react-router-dom";

import Header from "components/Headers/Header.js";
import { useContext } from "react";
import { AuthContext } from "functions/context";

const Usuario = () => {
  const {userList} = useContext(AuthContext)
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
                <Link to="/admin/userCreate" className="mb-0 btn btn-primary">+ Novo usuario</Link>
              </CardHeader>
              <Table className="align-items-center table-flush col-12 px-3" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">email</th>
                    
                    <th>Acção</th>
                 
                  </tr>
                </thead>
                <tbody>

                  {userList?.map((user)=>(


                            <tr key={user.id}>
                                    <td>{user?.name}</td>    
                                    <td>{user?.email}</td>            
                                                
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <button className="btn btn-primary">editar</button>
                                        <button className="btn btn-danger">Eliminar</button>
                                      </div>
                                    </td>

                            </tr>




                  ))}
                 
                

                 
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

export default Usuario;
