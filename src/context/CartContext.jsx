import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let existe = cart.some((elemento) => elemento.id === product.id);
    if (existe) {
      let nuevoArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return { ...elemento, quantity: product.quantity };
        } else {
          return elemento;
        }
      });
      setCart(nuevoArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalQuantityById = (id) => {
    let product = cart.find((elemento) => elemento.id === id);
    return product ? product.quantity : 1;
  };

  const deleteProductById = (id) => {
    let arrayFiltrado = cart.filter((product) => product.id !== id);
    Swal.fire({
      title: "Seguro que quieres eliminar el producto?",
      showDenyButton: true,
      confirmButtonText: "Si, eliminar",
      denyButtonText: `No, Volver atras`,
    }).then((result) => {
      if (result.isConfirmed) {
        setCart(arrayFiltrado);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Se elimino el producto",
        });
      } else if (result.isDenied) {
        Swal.fire({
          position: "center",
          icon: "info",
          title: "No se elimino el producto",
        });
      }
    });
  };

  const getTotalAmount = () => {
    let totalCarrito = cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    return totalCarrito;
  };

  const getTotalItems = () => {
    let totalItems = cart.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);
    return totalItems;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteProductById,
    getTotalAmount,
    getTotalItems,
    getTotalQuantityById,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
