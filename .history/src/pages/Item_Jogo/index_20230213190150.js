import React from "react";
import './estilo.css';

export default function Item_Jogo(Props) {
    return (
        <div id="corpo">

            
            <div id="NomeJogo">
                {props.jogo}
            </div>
        </div>
    )
}