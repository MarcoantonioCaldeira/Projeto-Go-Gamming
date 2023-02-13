import "./estilo.css";
import  Rodape from  "../rodape/rodape";
import ItemJogo from "../Item_Jogo";


const Inicio = () => {
    
    return(
        <div>

            <div id="Local_Img">
                <h1>Aqui vai ficar o banner</h1>
            </div>
            <div id="Corpo_Site">

                <div id="Area_Principal">

                    <h2 class="h1_novidades">Novidades</h2>

                    <div id="Area_Novidades">
                        <ItemJogo imagem="./assets/" jogo="Gothan Knights"/>
                    </div>
                </div>
                

                <div id="Area_Principal_2">

                    <h2 class="h1_mais_comprados">Jogos mais comprados</h2>

                    <div id="Area_Mais_Comprados">
                        
                    </div>
                </div>

            </div>
            <Rodape />
        </div>
    )
}

export default Inicio;