import { Card, Container } from "react-bootstrap";

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
                    </Card>
                </div>
            </Container>
        </section>
    )
}

export default ItemDetail;