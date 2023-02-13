import React from "react";
import './estilo.css';

export default function Item_Jogo(props){
    return (
        <div id="corpo">

            <img className="imagemJogo" src={props.imagem} alt={props.jogo}/>

            <div id="NomeJogo">
                {props.jogo}
            </div>
        </div>
    )
}