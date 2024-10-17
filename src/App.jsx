import "./App.css";
import React from "react";

import Helloworld from "./components/Hello-world.jsx";
import Paragrafo from "./components/Paragrafo.jsx";
import Lista from "./components/Lista.jsx";
import Imagem from "./components/Imagem.jsx";
import Botao from "./components/Botao.jsx";
import Link from "./components/Link.jsx";
import Titulo from "./components/TituloSubTitulo.jsx";
import Saudacao from "./components/Saudacao.jsx";
import Estilizado from "./components/Estilizado.jsx";
import Fragment from "./components/Fragment.jsx";

function App() {
  return(
    <>

    <div className="myself">
      <strong>Felipe Barros - Equipe 04</strong>
      <p>Entrega dos 10 exercícios de React.</p>
    </div>

    <div className="card ex01">
      <h2>Exercício 1</h2>
      <Helloworld />
    </div>

    <div className="card ex02">
      <h2>Exercício 2</h2>
      <Paragrafo paragrafo='Esse é um parágrafo com props.'/>
    </div>

    <div className="card ex03">
      <h2>Exercício 3</h2>
      <Lista />
    </div>

    <div className="card ex04">
      <h2>Exercício 4</h2>
      <Imagem />
    </div>

    <div className="card ex05">
      <h2>Exercício 5</h2>
      <Botao />
    </div>

    <div className="card ex06">
      <h2>Exercício 6</h2>
      <Link />
    </div>

    <div className="card ex07">
      <h2>Exercício 7</h2>
      <Titulo />
    </div>

    <div className="card ex08">
      <h2>Exercício 8</h2>
      <Saudacao dia={false}/>
    </div>

    <div className="card ex09">
      <h2>Exercício 9</h2>
      <Estilizado style={{color: `violet`, backgroundColor: '#000', borderRadius: '10px'}}/>
    </div>

    <div className="card ex10">
      <h2>Exercício 10</h2>
      <Fragment />
    </div>
    </>
  )
}

export default App;