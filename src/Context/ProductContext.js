import { createContext, useEffect, useState } from "react";
// import productosJSON from "../components/productos.json";
import { collection, getDocs } from 'firebase/firestore';
import { getData } from '../firebase/index';

//Paso 1: creacion de un contexto simple vacio
const productoContext = createContext({});

export const ProductoContextProvider = ({ children }) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const getProductos = async () => {
            const productosCollection = collection(getData(), 'productosJSON');
            const productosSnapshot = await getDocs(productosCollection);
            const productosList = productosSnapshot.docs.map(doc =>({ id: doc.id, ...doc.data()}));
            console.log(productosList);
            setProductos(productosList);
        }
        getProductos();
    }, [])

    return (
    <productoContext.Provider value={{ productos, setProductos }}>
    {children}
    </productoContext.Provider>
    );
}

export default productoContext;