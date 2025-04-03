import { useEffect, useState } from "react";
import './CorBotao.css';
import '../Pages/pokedex.css'

function App() {
    const [temaEscuro, setTemaEscuro] = useState(() => {
        // Verifica o localStorage para definir o tema inicial
        const temaSalvo = localStorage.getItem('temaEscuro');
        return temaSalvo === 'true'; // Retorna true se o valor for 'true', caso contrário, false
    });

    useEffect(() => {
        // Atualiza o estilo do corpo com base no tema
        document.body.style.backgroundColor = temaEscuro ? '#f5ea95' : '#fecdd0';


        // Armazena a preferência no localStorage
        localStorage.setItem('temaEscuro', temaEscuro);

    }, [temaEscuro]);

    return (
        <>
            <button className="botaoCor" onClick={() => setTemaEscuro(!temaEscuro)}>
                {temaEscuro ? <i class='bx bxs-sun'></i> : <i class='bx bxs-moon' ></i>}
            </button>
        </>
    );
}

export default App;