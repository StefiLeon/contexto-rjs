import React, { useContext } from "react";
import { Button } from 'react-bootstrap'; 
import CartContext from "../Context/CartContext";

export default function ItemCount({ stock, initial, onAdd, items }) {

    const { addItem, removeItem, array } = useContext(CartContext);
    
    const sumar = () => {
        if (items < stock) {
            onAdd(items + 1);
        }
        addItem(array);
    };

    const restar = () => {
        if (items > 0) {
            onAdd(items - 1);
        }
        removeItem(array);
    };

    return (
        <>
            <h2>Productos en el carrito: {items}</h2>
            <Button onClick={sumar}> Agregar al carrito + </Button>
            <Button onClick={restar}> Quitar del carrito - </Button>
        </>
    )
}