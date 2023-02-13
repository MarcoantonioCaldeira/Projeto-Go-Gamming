import { Outlet, Link } from "react-router-dom";
import './estilo.css';


const Menu = () => {
  return (
      <>
        <nav id="nav_bar">
          <ul id="menu">
            <li>
              <Link>Inicio</Link>
            </li>
            <li>
              <Link>Jogos</Link>
            </li>
            <div class="dropdown" >
              <button class="dropbtn">Categorias</button>
                  <div class="dropdown-content">
                    <a><Link to="./Acao">Ação</Link></a>
                    <a><Link to="./Aventura">Aventura</Link></a>
                    <a><Link to="./Arcades">Arcades</Link></a>
                    <a><Link to="./Familia">Familia</Link></a>
                    <a><Link to="./Independentes">Independetes</Link></a>
                    <a><Link to="./Jogos_RPG">Jogos_RPG</Link></a>
                    <a><Link to="./Gratuitos">Gratuitos</Link></a>
                    <a><Link to="./Terror">Torror</Link></a>
                    <a><Link to="./Suspence">Suspence</Link></a>
                  </div>
            </div>
          </ul>
          <div id="area_cliente">
            <button class="area_cliente_login"><Link to="./Login">Entrar</Link></button>
            <button class="area_cliente_cadastro"><Link to="./Cadastro">Cadastro</Link></button>
          </div>
        </nav>
        <Outlet />
      </>
  )
};

export default Menu;