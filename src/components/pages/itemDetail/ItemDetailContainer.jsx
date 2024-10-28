import React, { useEffect, useState, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../../config-firebase";

const ItemDetailContainer = () => {
  // hook --> recuperar la parte dinamica de la ruta
  const [item, setItem] = useState({});
  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams(); // devuelve un objeto {}

  let totalItems = getTotalQuantityById(id);

  // const navigate = useNavigate();

  useEffect(() => {
    let productCollection = collection(db, "products");
    let refDoc = doc(productCollection, id);
    getDoc(refDoc).then((res) => {
      setItem({ ...res.data(), id: res.id });
    });
  }, [id]);

  const onAdd = (quantity) => {
    let productoParaElCarrito = { ...item, quantity };
    addToCart(productoParaElCarrito);
  };

  return <ItemDetail item={item} onAdd={onAdd} totalItems={totalItems} />;
};

export default ItemDetailContainer;
