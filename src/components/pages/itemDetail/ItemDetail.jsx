import React from "react";
import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ item, onAdd }) => {
  return (
    <div>
      <h1>{item.title}</h1>

      <CounterContainer onAdd={onAdd} stock={item.stock} />
    </div>
  );
};

export default ItemDetail;
