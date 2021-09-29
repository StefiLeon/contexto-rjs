import { createContext, useState } from "react";

//Evitar duplicados
const chequearItemCantidad = (carritoBorrador, producto) => {
    const productoEncontrado = carritoBorrador.find(item => item.id === producto.id);
    if (productoEncontrado) {
        productoEncontrado.count++;
        if (productoEncontrado.count > producto.stock) {
            productoEncontrado.count--;
        }
    } else {
        carritoBorrador.push({
            ...producto,
            count: 1
        });
    };
    return carritoBorrador;
};

//Borrar item del carrito
const borrarItem = (carritoBorrador, producto) => {
    const productoEncontrado = carritoBorrador.find(item => item.id === producto.id);
    if (productoEncontrado.count > 0) {
        productoEncontrado.count--;
    } else {
        carritoBorrador = carritoBorrador.filter(function(value, index, arr){
            return value !== productoEncontrado;
        });
    }
    return carritoBorrador;
};

//Contexto de carrito
const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {

    const [ carrito, setCarrito ] = useState([]);

    const [ array, setArray ] = useState({})

    const addItem = (item) => {
        const carritoBorrador = [...carrito];
        const cleanCarrito = chequearItemCantidad(carritoBorrador, item)
        setCarrito(cleanCarrito);
    };

    const removeItem = (item) => {
        const carritoBorrador = [...carrito];
        const cleanCarrito = borrarItem(carritoBorrador, item)
        setCarrito(cleanCarrito);
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