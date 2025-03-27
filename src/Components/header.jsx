import "./header.css"

function Header(props) {
 
    return(
        <>
            <header className="headerBox">
                <img src={props.img} alt="Pokémon" />
            </header>
        </>
    )
}

export default Header