import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import productosJSON from './productos.json';
import ItemDetail from './ItemDetail';
import CartContext from '../Context/CartContext';

export default function ItemDetailContainer() {

    const { productos, setProductos } = useContext(CartContext);

    const [ loading, setLoading ] = useState(false);

    const { id } = useParams();
    
    useEffect(() => {
        new Promise((resolve, reject) => {
            setLoading(true)
            setTimeout(() => resolve(productosJSON.filter((item) => item.id === id)), 3000);
        }).then((data) => setProductos(data[0]))
        .finally(() => {
            setLoading(false)
        })
    }, [])

    return loading ? <><h2>¡Aguantá la pelota!</h2><img src="https://resizer.glanacion.com/resizer/KdKdIppd9jmMr2uAXlwujMAkqCw=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/QXXCYXRVRVDXPAKWVRYGR2KAWU.jpg" /></> : <ItemDetail {...productos} />
}