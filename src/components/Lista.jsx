import React from "react";

function Produto(props) {
  return <li>Produto: {props.product}</li>;
}

function Lista() {
  const compras = ["Macarrão", "Salsicha", "Pão", "Hambúrguer"];

  return(
    <>
    <h3 style={{color: '#000'}}>Compras de supermercado:</h3>
    <ol>
      {compras.map((compras) => <Produto product = {compras} />)}
    </ol>
    </>
  );
}

export default Lista;
