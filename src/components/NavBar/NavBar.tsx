import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import '../../routes/AppRoutes'

function NavBar() {
    const navigate = useNavigate();
    return (
        <Navbar expand="lg" style={{ backgroundColor: '#F9ED32' }} >
            <Container fluid>
                <Navbar.Brand href="#">EL BUEN SABOR</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Hamburguesas</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Pizzas
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Bebidas
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex m-3">
                        <Form.Control
                            type="Buscar"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button style={{ backgroundColor: '#000000', borderColor: '#000000' }}>Search</Button>
                    </Form>
                  
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
                        </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar;