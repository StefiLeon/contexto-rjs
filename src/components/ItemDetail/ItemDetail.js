import ItemCount from "../Item/ItemCount";
import PaginaDeError from "../PaginaDeError";

import { Link } from "react-router-dom";
import { useState } from 'react';
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import "./ItemDetail.css";

function ItemDetail({producto}) {

    const [ items, setItems ] = useState(0);

    return ( <section className="mb-md-4 mt-md-4 pb-md-4 pt-md-4">
                <Container className="container-item-detail d-flex">
                    {producto !== undefined &&
                    <Row>
                        <div className="d-flex">
                        {value => <h1>{value}</h1>}
                            <Col>
                                <Card border="primary" className="bg-light">
                                    <Card.Img src={producto.imagen} className="imagen-item-detail" />
                                </Card>
                            </Col>
                            <Col>
                                <Card className="d-grid gap-2 pt-5">
                                    <h2>{producto.tipoDeProducto} {producto.modelo}</h2>
                                    <p>Precio: ${producto.precio}</p>
                                    <p>Stock disponible: {producto.stock}</p>
                                    <p>{producto.descripcion}</p>
                                    <ItemCount stock={producto.stock} initial={1} onAdd={setItems} items={items}/>
                                    {items > 0 && <Button><Link to="/cart" style={{color:"white"}}>Terminar compra</Link></Button>}
                                </Card>
                            </Col>
                        </div>
                    </Row>
                    }
                    {producto === undefined && <PaginaDeError /> }
                </Container>
            </section>
        )
    }

export default ItemDetail;