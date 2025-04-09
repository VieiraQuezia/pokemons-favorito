import React, { useEffect, useState } from "react";
import "./favorito.css";
 import Header from '../componentes/header'
 import Footer from '../componentes/footer'
 import Navbar from '../componentes/Navbar'

 import Img from '/blinkiesCafe-7j.gif'
 
// Função principal do componente Favoritos
function Favoritos() {
  // Definindo o estado para armazenar a lista de Pokémon favoritos
  const [favoritos, setFavoritos] = useState([]);
 
  // Carregar os favoritos do localStorage ao montar o componente
  useEffect(() => {
    // Obtém os favoritos armazenados no localStorage ou um array vazio se não houver dados
    const storedFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    // Atualiza o estado com os favoritos carregados
    setFavoritos(storedFavoritos);
  }, []);
 
  // Função para remover um Pokémon dos favoritos
  const removerFavorito = (pokemon) => {
    // Filtra os favoritos, removendo o Pokémon passado
    const novosFavoritos = favoritos.filter((favorito) => favorito !== pokemon);
    // Atualiza o estado com a lista de favoritos após a remoção
    setFavoritos(novosFavoritos);
    // Salva a lista atualizada no localStorage
    localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
  };
 
  return (
    <>
<Header img={Img}/>
<Navbar/>
      {/* Div que contém o componente Botao */}
     
      {/* Div principal que contém a lista de Pokémon favoritos */}
      <div className="favoritos-container">
        <h1 className="favoritos-titulo">Favoritos</h1>
        {/* Linha separadora */}
        <hr className="favoritos-linha" />
        <div className="pokemon-lista">
          {/* Verifica se há favoritos para exibir */}
          {favoritos.length > 0 ? (
            // Mapeia cada Pokémon nos favoritos e cria um card para cada um
            favoritos.map((pokemon) => (
              <div key={pokemon.id} className="pokemon-card-favoritos">
                {/* Exibe o nome do Pokémon */}
                <h2>{pokemon.nome}</h2>
                {/* Exibe a imagem do Pokémon */}
                <img src={pokemon.imagem} alt={pokemon.nome} />
                {/* Exibe os tipos do Pokémon */}
                <h4>Tipo: {pokemon.tipos}</h4>
                {/* Botão para remover o Pokémon dos favoritos */}
                <button className="remover-botao" onClick={() => removerFavorito(pokemon)}>
                  Remover
                </button>
              </div>
            ))
          ) : (
            // Se não houver Pokémon nos favoritos, exibe uma mensagem
          
            <p className="mensagem-sem-favoritos">              Você não tem nenhum Pokémon favorito.
</p>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
}
 
export default Favoritos;