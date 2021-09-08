import { useContext, useEffect, useState } from 'react';
import ItemList from './ItemList';
import productoContext from '../Context/ProductContext';

export default function ItemListContainer() {

    const { productos, setProductos } = useContext(productoContext)

    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        new Promise((resolve, reject) => {
            setLoading(true)
            setTimeout(() => resolve(productos), 3000)
        }).then(data => setProductos(data))
        .finally(() => {
            setLoading(false)
        })
    }, [])

    return loading ? <><h2>¡Aguantá la pelota!</h2><img src="https://resizer.glanacion.com/resizer/KdKdIppd9jmMr2uAXlwujMAkqCw=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/QXXCYXRVRVDXPAKWVRYGR2KAWU.jpg" /></> : <ItemList productos={productos}/>;
}
