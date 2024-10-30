import React from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import { Grid2 } from "@mui/material";

const ItemDetail = ({ item, onAdd, totalItems }) => {
  return (
    <Grid2 container justifyContent={"center"}>
      <div>
        <Grid2>
          <h1>{item.title}</h1>
        </Grid2>
        <Grid2>
          <h2>Descripcion: {item.description}</h2>
        </Grid2>
        <Grid2>
          <h3>Categoria: {item.category}</h3>
        </Grid2>
        <Grid2>
          <h3>Precio: {item.price}</h3>
        </Grid2>
        <Grid2>
          <h3>Stock: {item.stock}</h3>
        </Grid2>

        <CounterContainer
          onAdd={onAdd}
          stock={item.stock}
          totalItems={totalItems}
        />
      </div>
    </Grid2>
  );
};

export default ItemDetail;
