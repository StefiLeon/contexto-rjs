import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap'; 

export default function ItemCount({ stock, initial, onAdd, items }) {
    
    // const [ count, setCount ] = useState(initial);
    
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
            <Button onClick={sumar}> Sumar + </Button>
            <Button onClick={restar}> Restar - </Button>
        </>
    )
}