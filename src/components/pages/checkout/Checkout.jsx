import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../../config-firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Button, Grid2, TextField } from "@mui/material";
import "./checkout.css";

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { cart, getTotalAmount, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    let total = getTotalAmount();

    const order = {
      buyer: user,
      items: cart,
      total,
    };

    let refCollection = collection(db, "orders");
    addDoc(refCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });

    order.items.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  if (isLoading) {
    return <h2>Cargando...</h2>;
  }

  return (
    <div>
      {orderId ? (
        <h1>Gracias por tu compra, el numero de orden es: {orderId}</h1>
      ) : (
        <Grid2 container direction="column">
          <form onSubmit={handleSumbit} className="formulario">
            <Grid2>
              <TextField
                type="text"
                name="name"
                onChange={handleChange}
                label="Nombre"
                variant="outlined"
              />
            </Grid2>
            <Grid2>
              <TextField
                type="number"
                name="phone"
                onChange={handleChange}
                label="Telefono"
                variant="outlined"
              />
            </Grid2>
            <Grid2>
              <TextField
                type="email"
                name="email"
                onChange={handleChange}
                label="Email"
                variant="outlined"
              />
            </Grid2>
            <Button type="submit" variant="contained">
              Comprar
            </Button>
          </form>
        </Grid2>
      )}
    </div>
  );
};

export default Checkout;

// name phone email
