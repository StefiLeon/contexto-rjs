import {useContext, useState} from "react";
import CartContext from "../Context/CartContext";
import { Button, Form } from 'react-bootstrap';
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";


const CarritoF = () => {   
    const { carrito, removeAllItems } = useContext(CartContext);

    const [ items, setItems ] = useState(0);

    const handleCompra = (e) => {
        e.preventDefault();
        console.log("fin de la compra");
    }

    return (
        <div>
            <h1>Carrito</h1>
            {carrito.map((item => (
                <div key={item.id}>
                <p>{item.tipoDeProducto} {item.modelo}</p>
                <p>Cantidad: {item.count}</p>
                <p>Precio: ${item.precio}</p>
                <ItemCount stock={item.stock} initial={1} onAdd={setItems} items={item.count}/>
                <p>Total del producto: {item.precio*item.count}</p>
                </div>
            )))}
            {carrito.length > 0 && <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre y apellido</Form.Label>
                    <Form.Control type="textarea" placeholder="Ingresá tu nombre" />
                    <Form.Text className="text-muted">
                    Nunca compartiremos tu información.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email de contacto</Form.Label>
                    <Form.Control type="mail" placeholder="Ingresá tu mail" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="phone" placeholder="Ingresá tu teléfono" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleCompra}>
                    Terminar la compra
                </Button>
            </Form>
            <Button onClick={removeAllItems}>Limpiar todo el carrito</Button>
            </>}
            {carrito.length === 0 && <>
            <h3>Carrito vacio</h3>
            <Button><Link to="/" style={{color:"white"}}>Ver productos</Link></Button>
            </>}
            </div>
    );
};

export default CarritoF;

// function Carrito() {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <>
//             <Button variant="primary" onClick={handleShow}>
//             Ver carrito
//             </Button>
//             <Offcanvas show={show} onHide={handleClose}>
//                 <Offcanvas.Header closeButton>
//                     <Offcanvas.Title>Offcanvas</Offcanvas.Title>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body>
//                     Some text as placeholder. In real life you can have the elements you
//                     have chosen. Like, text, images, lists, etc.
//                 </Offcanvas.Body>
//             </Offcanvas>
//         </>
//     );
// }

// export default Carrito;