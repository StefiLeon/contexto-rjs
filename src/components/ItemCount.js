import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap'; 


export default function ItemCount(props) {
    const [stock, setStock] = useState (10);
    const initial = ""
    const [onAdd, setOnAdd] = useState (1);

    useEffect(() => {
        return () => {
        };
    }, [stock, initial, onAdd]);

    useEffect(() => {
        setStock(stock - 1);
    }, [onAdd]);

    useEffect(() => {
        return () => {
            setOnAdd(1);
        }
    }, [onAdd>10, onAdd<0]);

    return (
        <>
            <h2>Productos en el carrito: {onAdd}</h2>
            <Button onClick= {() => props.agregar(props)}>Agregar</Button>
            <Button onClick={() => setOnAdd(onAdd + 1)}> Agregar + </Button>
            <Button onClick={() => setOnAdd(onAdd - 1)}> Quitar - </Button>
        </>
    )
}