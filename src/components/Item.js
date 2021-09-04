import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function Item(props) {

    return (
        <Card border="primary" className="bg-light" style={{height:"40rem"}}>
            <Card.Img src={props.imagen} style={{objectFit:"cover"}} alt="{props.tipoDeProducto} {props.modelo}" />
            <Card.ImgOverlay>
                <h3>{props.tipoDeProducto} {props.modelo}</h3>
                <Card.Text>
                    Precio: ${props.precio}
                </Card.Text>
                <Card.Text>
                    Stock disponible: {props.stock}
                </Card.Text>
                <Card.Text><Link to={`/item/${props.id}`}>Ver más</Link></Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}

export default Item;