import ItemList from './ItemList';
import productoContext from '../../Context/ProductContext';

import { Row } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import "../Item/Item.css";

export default function ItemListContainer() {

    const { productos, setProductos } = useContext(productoContext)

    const [ loading, setLoading ] = useState(false);

    //Llamar array de productos desde FIrebase
    useEffect(() => {
        new Promise((resolve, reject) => {
            setLoading(true)
            setTimeout(() => resolve(productos), 1000)
        }).then(data => setProductos(data))
        .finally(() => {
            setLoading(false)
        })
    }, [productos, setProductos])

    return loading ? <div className="align-content-center">
                        <Row><h2>¡Aguantá la pelota!</h2></Row>
                        <Row className="justify-content-center"><img src="https://resizer.glanacion.com/resizer/KdKdIppd9jmMr2uAXlwujMAkqCw=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/QXXCYXRVRVDXPAKWVRYGR2KAWU.jpg" alt="Imagen Dalila Ippolito" /></Row>
                    </div> : <ItemList productos={productos}/>;
}