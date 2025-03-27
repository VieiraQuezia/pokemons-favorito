import { Link } from 'react-router-dom'
import "./navBar.css";

function NavBar() {
    
    return(
    
      <nav className="blocoNav">
      <Link className="fonte" id="link" to="/">Pokedex</Link>

      <Link className="fonte" id="link" to="/pokemons_favoritos">Favoritos</Link>

    </nav>
        

    )
}

export default NavBar