import Item from "./Item";
import { Container, Row } from "react-bootstrap";
import { useContext } from "react";
import productoContext from "../Context/ProductContext";

function ItemList({ onAdd }) {

    const { productos } = useContext(productoContext);

    return (
        <section className="mb-md-4 mt-md-4 pb-md-4 pt-md-4">
        <Container fluid>
            {productos.map((item => (
                <Row>
                    <Item {...item} key={item.id} onAdd={onAdd}/>
                </Row>
            )))}
        </Container>
        </section>
    );
}

export default ItemList;