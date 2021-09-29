import ItemCategory from "./ItemCategory";

import { collection, getDocs, query, where } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../firebase";

export default function ItemCategoryContainer() {

    const [ loading ] = useState(false);
    const [ prod, setProd ] = useState([]);
    const { name } = useParams();

    //Llamar productos de Firebase
    useEffect(() => {
        const getProd = async() => {
            const prodCollection = query(collection(db, "productosJSON"), where("tipoDeProducto", "==", `${name}`));
            const prodSnapshot = await getDocs(prodCollection);
            const prodList = prodSnapshot.docs.map(doc =>({ id: doc.id, ...doc.data()}));
            setProd(prodList);
            }
        getProd();
    }, [name])

    return loading ? <><h2>¡Aguantá la pelota!</h2><img src="https://resizer.glanacion.com/resizer/KdKdIppd9jmMr2uAXlwujMAkqCw=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/QXXCYXRVRVDXPAKWVRYGR2KAWU.jpg" alt="dalila ippolito"/></> : <ItemCategory productos={prod} />
}