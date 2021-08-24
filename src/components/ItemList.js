import Item from "./Item";
import {Container, Row} from "react-bootstrap";

function ItemList({ products }) {
    return (
        <section className="mb-md-4 mt-md-4 pb-md-4 pt-md-4">
        <Container fluid>
            {products.map((item => (
                <Row>
                    <Item {...item}/>
                </Row>
            )))}
        </Container>
        </section>
    );
}

export default ItemList;