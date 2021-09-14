import {useContext, useState} from "react";
import CartContext from "../Context/CartContext";
import { Button, Form } from 'react-bootstrap';
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/index";


const CarritoF = () => {   
    const { carrito, removeAllItems } = useContext(CartContext);

    const [ items, setItems ] = useState(0);

    const getTotal = (carrito) => {
        let total = 0;
        carrito.forEach(item => {
            total += item.precio * item.count
        })
        console.log(total)
        return total;
    }

    const [ nombre, setNombre ] = useState('');
    const [ mail, setMail ] = useState('');
    const [ telefono, setTelefono ] = useState('');

    function onNombreChange(evt) {
        setNombre(evt.target.value);
    }

    function onMailChange(evt) {
        setMail(evt.target.value);
    }

    function onTelefonoChange(evt) {
        setTelefono(evt.target.value);
    }

    const buyerInfo = {
        nombre: nombre,
        mail: mail,
        telefono: telefono
    }

    const [ loading, setLoading ] = useState(false);

    const handleCompra = async(e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "orders"), {
            buyer: buyerInfo,
            items: carrito,
            date: Timestamp.fromDate(new Date()),
            total: getTotal(carrito),
        });
        console.log(docRef)
        setLoading(true);
        removeAllItems();
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
                    <Form.Control type="textarea" placeholder="Ingresá tu nombre" onChange={evt => onNombreChange(evt)} />
                    <Form.Text className="text-muted">
                    Nunca compartiremos tu información.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email de contacto</Form.Label>
                    <Form.Control type="mail" placeholder="Ingresá tu mail" onChange={evt => onMailChange(evt)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="phone" placeholder="Ingresá tu teléfono" onChange={evt => onTelefonoChange(evt)}/>
                </Form.Group>
                <Button variant="primary" type="textarea" onClick={handleCompra}>
                    Terminar la compra
                </Button>
            </Form>
            <Button onClick={removeAllItems}>Limpiar todo el carrito</Button>
            </>}
            {carrito.length === 0 && <>
            <h3>Carrito vacio</h3>
            <Button><Link to="/" style={{color:"white"}}>Ver productos</Link></Button>
            </>}
            {loading === true && <>
            <h3>¡Gracias por tu compra!</h3>            
            </>}
            </div>
    );
};

export default CarritoF;