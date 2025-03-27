import { useState } from "react";
import "./pokedex.css";
import Header from "../Components/header";
import PokemonH from "/blinkiesCafe-7j.gif"


// componentes
import Header from "../Components/header";
import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar";

export default function PokemonSearch() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  const fetchPokemon = async () => {
    if (!search.trim()) return;

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
      if (!response.ok) {
        throw new Error("Pokémon não encontrado");
      }
      const data = await response.json();
      setPokemon({
        nome: data.name,
        imagem: data.sprites.front_default,
        tipos: data.types.map((t) => t.type.name).join(", "),
        id: data.id,
      });
      setError(null);
    } catch (err) {
      setError(err.message);
      setPokemon(null);
    }
  };

  const adicionarAosFavoritos = () => {
    if (!pokemon) return;
    const favoritos = JSON.parse(localStorage.getItem("Pokemons-Favoritos")) || [];
    favoritos.push(pokemon);
    localStorage.setItem("Pokemons-Favoritos", JSON.stringify(favoritos));
    alert("Pokémon adicionado aos favoritos!");
  };

  return (
<>
<Header />
<NavBar />
<div className="botao">
</div>
<Header img={PokemonH}/>

    <div className="container">
      <input
        type="text"
        placeholder="Digite o nome ou ID do Pokémon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input-field"
      />
      <button onClick={fetchPokemon} className="button">
        Buscar Pokémon
      </button>

      {error && <p className="error-message">{error}</p>}

      {pokemon && (
        <div className="pokemon-card">
          <h2>{pokemon.nome.toUpperCase()} # {pokemon.id}</h2>
          <img src={pokemon.imagem} alt={pokemon.nome}  />
          <button onClick={adicionarAosFavoritos} className="favorites-button">
            Adicionar aos Favoritos
          </button>
        </div>
      )}
      <Footer />
    </div>
    </>
  );
}
