import React, { useContext } from "react";
import CartContext from "../../Context/CartContext";

import { Button } from 'react-bootstrap'; 

export default function ItemCount({ stock, initial, onAdd, items }) {

    const { addItem, removeItem, array } = useContext(CartContext);
    
    //Sumar items
    const sumar = () => {
        if (items < stock) {
            onAdd(items + 1);
        }
        addItem(array);
    };

    //Restar items
    const restar = () => {
        if (items > 0) {
            onAdd(items - 1);
        }
        removeItem(array);
    };

    return (
        <>
            <p>Productos en el carrito: {items}</p>
            <Button stock={stock} onClick={sumar}> Agregar al carrito + </Button>
            <Button stock={stock} onClick={restar}> Quitar del carrito - </Button>
        </>
    )
}