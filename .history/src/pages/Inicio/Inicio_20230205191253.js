import "./estilo.css"
import  Rodape from  "../rodape/rodape"
import  Menu from  "../Menu/Menu"

const Inicio = () => {
    
    return(
        <div>
            <Menu />
            <div id="Local_Img">
                <h1>Aqui é a tela inicial</h1>
            </div>
            <div id="Corpo_Site">

            </div>
            <Rodape />
        </div>
    )
}

export default Inicio;