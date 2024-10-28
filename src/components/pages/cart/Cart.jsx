import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, clearCart, deleteProductById, total }) => {
  return (
    <div>
      <h2>Carrito</h2>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>Titulo {product.title}</h2>
            <h3>Precio {product.price}</h3>
            <h3>Cantidad {product.quantity}</h3>
            <h3>SubTotal: {product.price * product.quantity}</h3>
            <Button
              variant="contained"
              onClick={() => deleteProductById(product.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}
      <>
        <Button variant="contained" onClick={clearCart}>
          Limpiar Carrito
        </Button>
        <Link to="/checkout">
          <Button variant="contained">Comprar</Button>
        </Link>
      </>

      <h2>El Total a pagar es: ${total}</h2>
    </div>
  );
};

export default Cart;
