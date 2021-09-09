import { createContext, useState } from "react";
import productosJSON from "../components/productos.json";

//Paso 1: creacion de un contexto simple vacio
const productoContext = createContext({});

export function ProductoContextProvider({ children }) {

    const [productos, setProductos] = useState(productosJSON);

    return (
    <productoContext.Provider value={{ productos, setProductos }}>
    {children}
    </productoContext.Provider>
    );
}

export default productoContext;