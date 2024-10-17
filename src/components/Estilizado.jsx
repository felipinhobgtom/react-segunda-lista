import React from "react";

function Estilizado(props){

    return(
        <div style={props.style}>
            <p>Div estilizada in-line e com props.</p>
        </div>
    )
}

export default Estilizado