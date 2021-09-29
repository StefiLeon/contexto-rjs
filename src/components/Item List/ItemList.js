import Item from "../Item/Item";

import { Container, Row, Col } from "react-bootstrap";
import "./ItemList.css";

function ItemList({ onAdd, productos }) {

    return (
        <section className="mb-md-4 mt-md-4 pb-md-4 pt-md-4">
        <Container>
            <Row>
            {productos.map((item => (
                <Col sm={8} md={4} key={item.id} className="bootstrap-card">
                    <Item {...item} key={item.id} onAdd={onAdd}/>
                </Col>
            )))}
            </Row>
        </Container>
        </section>
    );
}

export default ItemList;