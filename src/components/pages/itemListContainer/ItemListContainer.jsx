import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../config-firebase";
import { products } from "../../../productsMock";

const ItemListContainer = () => {
  const [items, setItems] = useState([]); // undefined.title

  const { categoryName } = useParams(); // {} -- { categoryName }
  // console.log(categoryName);
  // va ser falsy cuando este en home --> todos los productos
  // va ser truthy cuando estemos en una category ---> parte de los productos

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = productsCollection;

    if (categoryName) {
      let productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", categoryName)
      );
      consulta = productsCollectionFiltered;
    }

    getDocs(consulta).then((res) => {
      let array = res.docs.map((elemento) => {
        return { ...elemento.data(), id: elemento.id };
      });
      setItems(array);
    });
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
