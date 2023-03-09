import "./App.css";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar icono="./src/img/carrito-de-compras.png" />
      <h1>pokeMarket</h1>
      <ItemListContainer greeting="Bienvenido a la tienda Pokemón" />
      <Button texto="Home" />
      <Button texto="About" />
      <Button texto="Contact" />
    </div>
  );
}

export default App;
