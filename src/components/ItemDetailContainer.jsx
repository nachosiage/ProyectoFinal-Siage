import {useEffect, useState} from 'react'
import { pedirItemPorId } from '../helpers/pedirDatos';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemDetailContainer = ( {} ) => {

    const [item,setItem] = useState(null);
    const id =useParams().id;

    useEffect(() => {

      const docRef = doc (db, "productos", id);
      getDocs(docRef)
        // .then((resp) => {
        //   setItem(
        //     {...resp.data(), id: resp.id }
        //   );
        // }) 

        .then((resp) => {
          const newItem = {
               id: resp.id,
               ...resp.data(),
             };
        setItem(newItem)
       })

    }, [id])
    
    console.log(item)

  return (
    <div>
        {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer