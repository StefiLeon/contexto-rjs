import { Card, Container, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from 'react';
import CartContext from "../Context/CartContext";

function ItemDetail({id, tipoDeProducto, modelo, precio, stock, imagen}) {
    
    const [ items, setItems ] = useState(0);

    const {carrito, productos} = useContext(CartContext);
    console.log(carrito, productos);

    // const [arrayDeProductos, setArrayDeProductos] = useState([]);

    const addItem = () => {
        carrito.cantidad = {items};
        carrito.push(productos)
        console.log(carrito)
        const newArray = new Set(carrito);
        console.log(newArray)
        window.localStorage.setItem("carrito", JSON.stringify([...newArray]));
    }

    return (
            <section className="mb-md-4 mt-md-4 pb-md-4 pt-md-4">
                <Container>
                    <div className="row d-flex">
                        {value => <h1>{value}</h1>}
                        <Card border="primary" className="bg-light">
                            <Card.Img src={imagen} alt="{props.tipoDeProducto} {props.modelo}" />
                            <Card.Title style={{textAlign:"center"}}>{tipoDeProducto} {modelo}</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>
                                Precio: ${precio}
                            </Card.Text>
                            <Card.Text style={{textAlign:"scenter"}}>
                                Stock disponible: {stock}
                            </Card.Text>
                            <ItemCount stock={stock} initial={1} onAdd={setItems} items={items}/>
                            {items > 0 && <Button onClick={addItem}><Link to="/cart" style={{color:"white"}}>Terminar compra</Link></Button>}
                        </Card>
                    </div>
                </Container>
            </section>
    )
}

export default ItemDetail;