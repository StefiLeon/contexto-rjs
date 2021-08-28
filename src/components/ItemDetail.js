import { Card, Container } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useState } from 'react';

function ItemDetail(props) {

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
                        <ItemCount stock={props.stock} initial={1} onAdd={0} />
                    </Card>
                </div>
            </Container>
        </section>
    )
}

export default ItemDetail;