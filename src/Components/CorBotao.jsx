import { useEffect, useState } from "react"
import './CorBotao.css'
function App() {
    const [temaEscuro, setTemaEscuro] = useState(false)

    useEffect(() => {

       document.body.style.backgroundColor = temaEscuro ? '#242424' : 'white'
       document.body.style.color = temaEscuro ? 'white' : 'black'

       console.log("Tema escuro: ", temaEscuro ? "Ativado" : "Desativado")
    }, [temaEscuro])


    return(
        <>



<button className="botaoCor" onClick={() => setTemaEscuro(!temaEscuro)} > {temaEscuro ? '☀' : '🌙'}  </button>

   </>
    )
}

export default App