import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap'; 

export default function ItemCount({ stock, initial, onAdd }) {
    
    const [ count, setCount ] = useState(initial);
    
    function onAdd (count) {
        console.log(`Total de productos: ${count}`);
    }

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
        onAdd(count);
    };

    const restar = () => {
        if (count > 0) {
            setCount(count - 1);
        }
        onAdd(count);
    };

    return (
        <>
            <h2>Productos en el carrito: {count}</h2>
            <Button onClick={sumar}> Sumar + </Button>
            <Button onClick={restar}> Restar - </Button>
        </>
    )
}