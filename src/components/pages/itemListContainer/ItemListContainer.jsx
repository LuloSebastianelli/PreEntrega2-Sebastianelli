import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]); // undefined.title

  const { categoryName } = useParams(); // {} -- { categoryName }
  console.log(categoryName);
  // va ser falsy cuando este en home --> todos los productos
  // va ser truthy cuando estemos en una category ---> parte de los productos

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category === categoryName
    );
    const getProducts = new Promise((res, rej) => {
      let isLogued = true;
      if (isLogued) {
        res(categoryName ? filteredProducts : products);
      } else {
        rej({ message: "algo salio mal" });
      }
    });

    getProducts
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.log("entro en el catch ", error);
      });
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
