import React from "react";
import { Button } from 'react-bootstrap'; 

export default function ItemCount({ stock, initial, onAdd, items }) {
    
    const sumar = () => {
        if (items < stock) {
            onAdd(items + 1);
        }
    };

    const restar = () => {
        if (items > 0) {
            onAdd(items - 1);
        }
    };

    return (
        <>
            <h2>Productos en el carrito: {items}</h2>
            <Button onClick={sumar}> Agregar al carrito + </Button>
            <Button onClick={restar}> Quitar del carrito - </Button>
        </>
    )
}