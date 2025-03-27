import "./header.css"
// import { useEffect, useState } from "react";

function Header() {
    //  const [pokemonsFavoritos, setPokemonsFavoritos] = useState(null);
    
    //   useEffect(() => {

    //     const savedFavoritos = localStorage.getItem("Pokemons-Favoritos");
    //     if (savedFavoritos) {
    //       setPokemonsFavoritos(JSON.parse(savedFavoritos));
    //     }
    //   }, []);
    
    //   if (!pokemonsFavoritos) {
    //     return <h2>Nenhuma informação de país disponível.</h2>;
    //   }
    return(
        <>
            <header className="headerBox">
                <h1>Pokemon</h1>
            </header>
        </>
    )
}

export default Header