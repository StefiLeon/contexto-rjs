import CartWidget from './Cart/CartWidget';
import logo from '../logo.svg';
import NavCategory from "./Item List/ItemCat";
import productoContext from '../Context/ProductContext';

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import '../App.css';

function NavBar() {

    const { categoria } = useContext(productoContext);

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
                                    {categoria.map((cat => (
                                        <NavCategory {...cat} key={cat.name} />
                                    )))}
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