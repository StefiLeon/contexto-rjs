import { createContext, useState } from "react";

const chequearItemCantidad = (carritoBorrador, producto) => {
    const productoEncontrado = carritoBorrador.find(item => item.id === producto.id);
    if (productoEncontrado) {
        productoEncontrado.count++;
    } else {
        carritoBorrador.push({
            ...producto,
            count: 1
        });
    };
    return carritoBorrador;
};

const borrarItem = (carritoBorrador, producto) => {
    const productoEncontrado = carritoBorrador.find(item => item.id === producto.id);
    if (productoEncontrado.count > 0) {
        productoEncontrado.count--;
        console.log(producto);
    } else {
        carritoBorrador.shift();
    }
    return carritoBorrador;
};

const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {

    const [ carrito, setCarrito ] = useState([]);

    const [ array, setArray ] = useState({})

    const addItem = (item) => {
        const carritoBorrador = [...carrito];
        const cleanCarrito = chequearItemCantidad(carritoBorrador, item)
        setCarrito(cleanCarrito);
        console.log("carrito", {carrito});
    };

    const removeItem = (item) => {
        const carritoBorrador = [...carrito];
        const cleanCarrito = borrarItem(carritoBorrador, item)
        setCarrito(cleanCarrito);
        console.log("carrito", {carrito});
    };

    const removeAllItems = () => {
        const cleanCarrito = [];
        setCarrito(cleanCarrito);
    }

    return (<CartContext.Provider value={{ carrito, addItem, removeItem, removeAllItems, array, setArray }}>
        {children}
    </CartContext.Provider>
    );
};

export default CartContext;