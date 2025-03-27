import "./header.css"

function Header(props) {
 
    return(
        <>
            <header className="headerBox">
                <img src={props.img} alt="Pokémon" style={{width:'70vw'}} />
            </header>
        </>
    )
}

export default Header