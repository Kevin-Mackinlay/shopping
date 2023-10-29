import React, { useEffect, useState } from "react";
import { getItem } from "../../mock/data";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../service/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loader, setLoader] = useState(false)
  const { id } = useParams();


//   useEffect(() => {
//     setLoader(true)
//     getItem(id)
//       .then((res) => setProductos(res))
//       .catch((error) => console.log(error))
//       .finally(()=> setLoader(false))
//   }, []);
useEffect(()=>{
    setLoader(true)
    const collectionProd = collection(db, 'products')
    const referenceToDoc = doc(collectionProd, id)
    getDoc(referenceToDoc)
    .then((res)=> setProduct({id:res.id, ...res.data()}))
    .catch((error)=> console.log(error))
    .finally(()=> setLoader(false))
},[])

  return(
<div>
    {loader ? <p>Cargando...</p> : <ItemDetail product={product}/>}
</div>

  ) 
};

export default ItemDetailContainer;
