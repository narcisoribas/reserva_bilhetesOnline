import { useContext } from "react";
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
import { AuthContext } from "functions/context";

/*

{
  "id": 2,
  "": 1,
  "dataViagem": "2020-10-23",
  "horaViagem": "10:00",
  "n_assento": 23,
  "n_bilhete": "0",
  "pagamento_id": 2,
  "": 2,
  "user_id": 1,
  "estado": "disponivel",
  "observacao": "nenhuma",
  "created_at": "2023-11-09T22:49:50.000000Z",
  "updated_at": "2023-11-09T22:49:50.000000Z"
}
*/
const Pagamentos = () => {
  const {viagem}=useContext(AuthContext)
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
                <h3 className="mb-0 btn btn-primary">Pagamentos</h3>
              </CardHeader>
              <Table className="align-items-center table-flush col-12 px-3" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">codigo</th>
                    <th>Cliente</th>
                    <th>Rota</th>               
                    <th scope="col">Data</th>
                    <th scope="col">Hora</th>
                    <th scope="col">Ação</th>
                 
                  </tr>
                </thead>
                <tbody>
                 {viagem?.map((data)=>(
                      <tr>
                          <td>{data.id}</td>    
                          <td>{data.passageiro_id}</td>      
                          <td>{data.rota_id}</td>   
                          <td>{data.dataViagem}</td> 
                          <td>{data.horaViagem}</td> 
                                   
                         
                        
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

export default Pagamentos;
