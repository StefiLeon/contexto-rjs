import { createContext, useState } from "react";

const chequearItemCantidad = (productos, producto) => {
    const productoEncontrado = productos.find(item => item.id === producto.id);
    if (productoEncontrado) {
        productoEncontrado.count++;
    } else {
        productos.push({
            ...producto,
            count: 1
        });
    };
    return productos;
};


const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

    const addItem = (producto) => {
        const carritoBorrador = [{...carrito}];
        const cleanCarrito = chequearItemCantidad(carritoBorrador, producto)
        setCarrito(cleanCarrito);
        console.log(cleanCarrito);
    };

    const removeItem = (itemID) => {
        const carritoBorrador = [{...carrito}];
        const cleanCarrito = carritoBorrador.filter(producto => producto.id !== itemID);
        setCarrito(cleanCarrito);
    };

    return (<CartContext.Provider value={{ carrito, addItem }}>
        {children}
    </CartContext.Provider>
    );
};

export default CartContext;