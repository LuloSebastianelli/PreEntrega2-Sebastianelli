import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = ({ cart, clearCart, deleteProductById, total }) => {
  const limpiarConAlerta = () => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      confirmButtonText: "Si, Limpiar",
      denyButtonText: `No, volver`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Se limpio el carrito",
        });
      } else if (result.isDenied) {
        Swal.fire({
          position: "center",
          icon: "info",
          title: "El carrito quedo como estaba",
        });
      }
    });
  };
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
              Eliminar Producto
            </Button>
          </div>
        );
      })}
      <>
        <Button variant="contained" onClick={limpiarConAlerta}>
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
