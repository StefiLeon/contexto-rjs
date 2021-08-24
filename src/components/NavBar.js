import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import CartWidget from './CartWidget';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import '../App.css';

function NavBar() {
    return (
        <div>
            <Navbar fixed="top" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link style={{color:"white", textDecoration:"none"}} to="/">
                            <img
                            src={logo}
                            width="30"
                            height="30"
                            alt=""/>{'   '}
                            Tienda FutFem
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link><Link style={{color:"whitesmoke", textDecoration:"none"}} to="/">Inicio</Link></Nav.Link>
                                <NavDropdown title="Productos" id="basic-nav-dropdown">
                                    <NavDropdown.Item><Link to={`/category/:id`}>Tazas</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/category/:id">Cuadros</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/category/:id">Rompecabezas</Link></NavDropdown.Item>
                                </NavDropdown>
                                <CartWidget />
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;