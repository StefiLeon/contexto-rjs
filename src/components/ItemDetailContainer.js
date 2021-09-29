import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import productoContext from '../Context/ProductContext';
import CartContext from '../Context/CartContext';

export default function ItemDetailContainer() {

    const { productos } = useContext(productoContext);

    const { array, setArray } = useContext(CartContext);

    const [ loading, setLoading ] = useState(false);

    const { id } = useParams();
    
    useEffect(() => {
        new Promise((resolve, reject) => {
            setLoading(true)
            setTimeout(() => resolve(productos.filter((item) => item.id === id)), 3000);
        }).then((data) => setArray(data[0]))
        .finally(() => {
            setLoading(false)
        }) 
    }, [id, productos, setArray])

    return loading ? <><h2>¡Aguantá la pelota!</h2> <img src="https://resizer.glanacion.com/resizer/KdKdIppd9jmMr2uAXlwujMAkqCw=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/QXXCYXRVRVDXPAKWVRYGR2KAWU.jpg" alt="Imagen Dalila Ippolito" /></> : <ItemDetail producto={array} />
}