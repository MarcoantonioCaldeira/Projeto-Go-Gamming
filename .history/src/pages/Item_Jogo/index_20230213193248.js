import React from "react";
import './estilo.css';

export default function ItemJogo(props){
    return (
        <div className="corpo">

            <img className="imagemJogo" src={props.imagem} />

            <div className="NomeJogo">
                {props.jogo}
            </div>
        </div>
    )
}