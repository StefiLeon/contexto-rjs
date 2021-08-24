import { useEffect, useState } from 'react';
import { productosJSON } from './productos.json';
import ItemList from './ItemList';

export default function ItemListContainer() {

    const [ products, setProducts ] = useState([]);

    const [ loading, setLoading ] = useState(false);
    
    useEffect(() => {
        new Promise((resolve, reject) => {
            setLoading(true)
            setTimeout(() => resolve(productosJSON), 3000)
        }).then(data => setProducts(data))
        .finally(() => {
            setLoading(false)
        })
    }, [])

    return loading ? <><h2>¡Aguantá la pelota!</h2><img src="https://resizer.glanacion.com/resizer/KdKdIppd9jmMr2uAXlwujMAkqCw=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/QXXCYXRVRVDXPAKWVRYGR2KAWU.jpg" /></> : <ItemList products={products}/>;
}
