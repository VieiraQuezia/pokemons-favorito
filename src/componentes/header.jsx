import "./header.css"
import BotaoCor from "./CorBotao"
function Header(props) {
 
    return(
        <>
            <header className="headerBox">
                <img src={props.img} alt="Pokémon" style={{width:'70vw'}} />
                <BotaoCor/>
            </header>
        </>
    )
}

export default Header