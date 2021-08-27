import { Card, Container } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useEffect, useState } from 'react';

function ItemDetail(props) {
    
    const [ cantidad, setCantidad ] = useState([]);

    const agregar = (producto) => {

        console.log(`se agrego un producto`, producto);
        return (
            <>
                <button><a href="./Cart">Terminar mi compra</a></button>
            </>
        )
    };

    return (
        <section className="mb-md-4 mt-md-4 pb-md-4 pt-md-4">
            <Container>
                <div className="row d-flex">
                    <Card border="primary" className="bg-light">
                        <Card.Img src={props.imagen} alt="{props.tipoDeProducto} {props.modelo}" />
                        <Card.Title style={{textAlign:"center"}}>{props.tipoDeProducto} {props.modelo}</Card.Title>
                        <Card.Text style={{textAlign:"center"}}>
                            Precio: ${props.precio}
                        </Card.Text>
                        <Card.Text style={{textAlign:"center"}}>
                            Stock disponible: {props.stock}
                        </Card.Text>
                        <ItemCount agregar={agregar} />
                    </Card>
                </div>
            </Container>
        </section>
    )
}

export default ItemDetail;