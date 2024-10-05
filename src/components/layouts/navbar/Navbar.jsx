import { useState } from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import { categories } from "./categories";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const tooggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={"container-nav"}>
      {/* logo o el nombre de la empresa  */}
      <Link to="/">Nombre de Marca</Link>
      {/* al medio un listado de categorias clickeables */}
      <ul>
        {categories.map(({ title, path }) => (
          <Link key={title} to={path}>
            {title}
          </Link>
        ))}
      </ul>

      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default Navbar;
