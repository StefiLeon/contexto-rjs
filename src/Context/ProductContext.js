import { createContext, useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { getData } from '../firebase/index';

const productoContext = createContext({});

export const ProductoContextProvider = ({ children }) => {

    const [ productos, setProductos ] = useState([]);

    const categoria = [{
            id: "Tazas",
            name: "Taza"
        },
        {
            id: "Cuadros",
            name: "Cuadro"
        },
        {
            id: "Rompecabezas",
            name: "Rompecabezas"
        }]

    useEffect(() => {
        const getProductos = async () => {
            const productosCollection = collection(getData(), 'productosJSON');
            const productosSnapshot = await getDocs(productosCollection);
            const productosList = productosSnapshot.docs.map(doc =>({ id: doc.id, ...doc.data()}));
            console.log("productosList", productosList);
            setProductos(productosList);
        }
        getProductos();
    }, [])

    return (
    <productoContext.Provider value={{ productos, setProductos, categoria }}>
    {children}
    </productoContext.Provider>
    );
}

export default productoContext;