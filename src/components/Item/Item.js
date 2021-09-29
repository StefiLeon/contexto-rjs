import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import "./Item.css";

function Item(props) {

    return (
        <Card border="primary" className="bg-light" style={{height:"40rem"}}>
            <Card.Img src={props.imagen} className="imagenCard" alt="{props.tipoDeProducto} {props.modelo}" />
                <h3>{props.tipoDeProducto} {props.modelo}</h3>
                <Card.Text>
                    Precio: ${props.precio}
                </Card.Text>
                <Card.Text>
                    Stock disponible: {props.stock}
                </Card.Text>
                <Card.Text><Link to={`/item/${props.id}`}>Ver detalle</Link></Card.Text>
        </Card>
    )
}

export default Item;