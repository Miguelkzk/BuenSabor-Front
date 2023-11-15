import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import useIsLoggedIn from '../../hooks/useIsLoggedIn';
function NavBar() {
    const navigate = useNavigate();
    const isLoggedIn = useIsLoggedIn();
    function onLogOut() {
        window.localStorage.removeItem('isLoggedIn');
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('role');
        navigate('/');
    }
    return (
        <Navbar expand="lg" style={{ backgroundColor: '#F9ED32' }} >
            <Container fluid>
                <Navbar.Brand onClick={() => navigate('/')} >EL BUEN SABOR</Navbar.Brand>
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
                        <Nav.Link href="http://localhost:5173/articulos">Artículos</Nav.Link>
                        <Nav.Link href="http://localhost:5173/clientes">Clientes</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
                    </Nav>
                    {isLoggedIn && <Nav.Link onClick={onLogOut}>Log Out</Nav.Link>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar;