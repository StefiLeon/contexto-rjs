import ItemDetail from './ItemDetail';
import productoContext from '../../Context/ProductContext';
import CartContext from '../../Context/CartContext';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {

    const { productos } = useContext(productoContext);

    const { array, setArray } = useContext(CartContext);

    const [ loading, setLoading ] = useState(false);

    const { id } = useParams();
    
    useEffect(() => {
        new Promise((resolve, reject) => {
            setLoading(true)
            setTimeout(() => resolve(productos.filter((item) => item.id === id)));
        })
        .then((data) => {
            setArray(data[0])
        })
        .catch((error) => {
            console.log("Error", error);
        })
        .finally(() => {
            setLoading(false)
        }) 
    }, [id, productos, setArray])

    return loading ? <><h2>¡Aguantá la pelota!</h2><img src="https://resizer.glanacion.com/resizer/KdKdIppd9jmMr2uAXlwujMAkqCw=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/QXXCYXRVRVDXPAKWVRYGR2KAWU.jpg" alt="Dalila Ippolito"/></> : <ItemDetail producto={array} />
}