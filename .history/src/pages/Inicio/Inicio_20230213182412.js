import "./estilo.css"
import  Rodape from  "../rodape/rodape"


const Inicio = () => {
    
    return(
        <div>

            <div id="Local_Img">
                <h1>Aqui vai ficar o banner</h1>
            </div>
            <div id="Corpo_Site">

                <div id="Area_Principal_Novidades">
                    
                    <h2 h2="titulo_novidades">Novidades</h2>

                    <div id="Area_Novidades">
                        
                    </div>
                </div>
                

                {/* Jogos mais comprados
                <div id="Area_Mais_Comprados">

                </div> */}

                
                {/* Melhores franquias
                <div Area>

                </div> */}
            </div>
            <Rodape />
        </div>
    )
}

export default Inicio;