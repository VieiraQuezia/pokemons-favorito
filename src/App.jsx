import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Pokedex"
import Favoritos from "./pages/Favoritos"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons_favoritos" element={<Favoritos/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;