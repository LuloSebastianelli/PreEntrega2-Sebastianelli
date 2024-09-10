import { useState } from "react";
import "./navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "container-nav-dark" : "container-nav"}>
      <h2>Marca</h2>
      <ul>
        <li>Todos</li>
        <li>Aventura</li>
        <li>Simulacion</li>
      </ul>
      <button onClick={toggleTheme}>Cambiar Theme</button>
      <CartWidget />
    </div>
  );
};

export default Navbar;
