import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavCategory(props) {

    return (
        <NavDropdown.Item><NavLink to={`/categories/${props.name}`}>{props.id}</NavLink></NavDropdown.Item>
    )
}