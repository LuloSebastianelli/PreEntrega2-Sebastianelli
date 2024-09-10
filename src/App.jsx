import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  let saludo = "hola!!!";
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={saludo} />
    </div>
  );
}

export default App;
