import "./header.css"
import { useEffect, useState } from "react";

function Header() {
     const [pokemonsFavoritos, setPokemonsFavoritos] = useState(null);
    
      useEffect(() => {

        const savedFavoritos = localStorage.getItem("informacoesPais");
        if (savedFavoritos) {
          setPokemonsFavoritos(JSON.parse(savedFavoritos));
        }
      }, []);
    
      if (!pokemonsFavoritos) {
        return <h2>Nenhuma informação de país disponível.</h2>;
      }
    return(
        <>
            <header className="headerBox">
                <h1>{pokemonsFavoritos.nome}</h1>
                <img src={pokemonsFavoritos.bandeira} 
                 style={{ width: '215px', height: 'auto' }}
            />
            </header>
        </>
    )
}

export default Header