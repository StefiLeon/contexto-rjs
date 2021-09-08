import { Card, Container, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import CartContext from "../Context/CartContext";

function ItemDetail({producto}) {
    
    const [ items, setItems ] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleClick = ({producto}) => {
        addItem({producto});
    }

    return (
            <section className="mb-md-4 mt-md-4 pb-md-4 pt-md-4">
                <Container>
                    <div className="row d-flex">
                        {value => <h1>{value}</h1>}
                        <Card border="primary" className="bg-light">
                            <Card.Img src={producto.imagen} alt="{props.tipoDeProducto} {props.modelo}" />
                            <Card.Title style={{textAlign:"center"}}>{producto.tipoDeProducto} {producto.modelo}</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>
                                Precio: ${producto.precio}
                            </Card.Text>
                            <Card.Text style={{textAlign:"center"}}>
                                Stock disponible: {producto.stock}
                            </Card.Text>
                            <ItemCount stock={producto.stock} initial={1} onAdd={setItems} items={items}/>
                            <button onClick={handleClick}>a</button>
                            {items > 0 && <Button><Link to="/cart" style={{color:"white"}}>Terminar compra</Link></Button>}
                        </Card>
                    </div>
                </Container>
            </section>
    )
}

export default ItemDetail;