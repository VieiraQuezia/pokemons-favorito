import {useState,useEffect} from 'react';

function CorBotao() {
    const [temaEscuro,setTemaEscuro] = useState(() => JSON.parse(localStorage.getItem("modoEscuro")) || false);
    
    useEffect(() => {
        localStorage.setItem("modoEscuro", JSON.stringify(temaEscuro));
        document.body.style.backgroundColor = temaEscuro ? "black" : "#fff";

    }, [temaEscuro]); //Executa sempre que "temaEscuro" mudar

    return(
        <div style={{color: temaEscuro ? "#fff": "black"}}>
            <button onClick={() => setTemaEscuro(!temaEscuro)}> {temaEscuro ? "Modo Escuro" : "Modo Claro"}</button>
        </div>
    )
}

export default CorBotao;