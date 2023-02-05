import { Outlet, Link } from "react-router-dom";
import './estilo.css';


const Menu = () => {
  return (
      <>
        <nav id="nav_bar">
          <ul id="menu">
            <li>
              <Link to="./Inicio">Inicio</Link>
            </li>
            <li>
              <Link to="./Jogos">Jogos</Link>
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
          <button><Link to="./Login">Login</Link></button>
          <button><Link to="./Cadastro">Cadastro</Link></button>
        </nav>
        <Outlet />
      </>
  )
};

export default Menu;