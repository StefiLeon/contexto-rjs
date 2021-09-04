import { createContext, useState } from "react";

//Paso 1: creacion de un contexto simple vacio
const CartContext = createContext([]);

export function CartContextProvider({children}) {

    const [productos, setProductos] = useState([]);

    const [carrito, setCarrito] = useState([]);

    function addItem(productos) {
        const nuevoArray = [...carrito];
        nuevoArray.push(productos);
        setCarrito(nuevoArray);
    }

    function handleRemove(id) {
        const nuevoArray = carrito.filter((item) => item.id !== id);
        setCarrito(nuevoArray);
    }

    function clear(){
        const nuevoArray = [...carrito];
        nuevoArray.length = 0;
        setCarrito(nuevoArray);
    }

    return <CartContext.Provider value={{ productos, setProductos, carrito, setCarrito }}>
        {children}
    </CartContext.Provider>
}

export default CartContext;