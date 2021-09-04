import {useContext} from "react";
import CartContext from "../Context/CartContext";

const CarritoF = () => {   
    const { productos, carrito, addItem, handleRemove, clear } = useContext(CartContext);
    console.log(productos, carrito);
    return (
        <div>
            <h1>Carrito</h1>
        </div>
    );
};

export default CarritoF;