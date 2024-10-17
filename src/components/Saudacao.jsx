import React from "react";

function Saudacao(props){
    const saudar = props.dia
    
    return(
        <p>{saudar ? 'Bom dia.' : 'Boa noite.'}</p>
    )
}

export default Saudacao