import "./Footer.css";
import logoinstagram from "/instagram.png";
import logofacebook from "/facebook.png";
import logo from "/logo.png";
import ImgGitHub from "/github.png";

function Footer() {
  return (
    <>
      <section className="bodyFooter">
        <section className="infoContatos">
          <section className="redes">
            <section className="info">
              {/*classe para deixar o nome do lado da logo */}
              <img className="imgRedes" src={logoinstagram} />
              <p> @TropadaMandioca6_oficial</p>
            </section>

            <section className="info">
              <img className="imgRedes" src={logofacebook} />
              <p> Tropa Mandioca 6 Oficial</p>
            </section>
          </section>

          <section className="contato">
            <p> 📞 Contado para Vendas: +55 (21) 46002-8239</p>
            <p> 📩 Email para Contato: tropadamandioca6@gmail.com</p>
          </section>
        </section>

        <section className="informacoes">
          <section className="sobreNos">
            <p>
              <h4> Tropa da Mandioca © 2025 </h4> – Nosso site, desenvolvido com
              React, React Router, useEffect e useState, permite que você
              escolha um país usando uma API. As informações selecionadas são
              salvas no localStorage e exibidas dinamicamente nas outras
              páginas. 🌍🚀
            </p>
          </section>

          <section className="listas">
            <h4> Sistemas: </h4>
            <ul>
              <li>useEffect</li>
              <li>useState</li>
              <li>React Router Dom</li>
            </ul>
          </section>
        </section>
        <nav className="logos">
          <img className="imgLogo" src={logo} />
          <a href="https://github.com/VieiraQuezia/projeto-paises-api" target="_blank">
            <img className="imgGithub" src={ImgGitHub} />
          </a>
        </nav>
        <hr />

        <section className="integrantes">
          <section>
            <ul>
              <li>Guilherme Gabriel Santana</li>
              <li>Hayeska Loredane Alves Machado</li>
              <li>Leonardo Mori Vicente</li>
              <li>Quezia Amaral Vieira</li>
            </ul>
          </section>
        </section>
      </section>
    </>
  );
}

export default Footer;
