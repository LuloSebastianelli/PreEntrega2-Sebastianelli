import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
const CartWidget = ({ id }) => {
  return (
    <div>
      <Badge badgeContent={0} color="primary" max={50} showZero={true}>
        <ShoppingCartIcon />
      </Badge>
    </div>
  );
};

export default CartWidget;
