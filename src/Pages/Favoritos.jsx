import { useEffect, useState } from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";

function PokemonsFavoritos() {
  const [pokemonsFavoritos, setPokemonsFavoritos] = useState(null);

  useEffect(() => {
    const savePokemons = localStorage.getItem("Pokemons-Favoritos");
    if (savePokemons) {
      setPokemonsFavoritos(JSON.parse(savePokemons));
    }
  }, []);

  if (!pokemonsFavoritos) {
    return (
      <>
        <Header />
        <h2>Nenhum pokemon salvo</h2>
        <Footer/>
      </>
    );
  }

  return (
    <div>
      <Header />
      <center>
        <h2 className="detalhe">POKÉMONS FAVORITOS 💗:</h2>
      </center>
      <article className="bloquinhos">
        <nav className="bloquinho">
          <img src={pokemonsFavoritos.imagem} />
          <p>
            {pokemonsFavoritos.id}|{pokemonsFavoritos.nome}
          </p>
        </nav>
      </article>
    </div>
  );
}

export default PokemonsFavoritos;
