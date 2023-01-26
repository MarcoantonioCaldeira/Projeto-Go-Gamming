import { Outlet, Link } from "react-router-dom";
import './estilo.css';


const Menu = () => {
  return (
      <>
        <nav id="nav_bar">
          <ul>
            <li>
              <Link to="./Inicio">Inicio</Link>
            </li>
            <li>
              <Link to="./Jogos">Jogos</Link>
            </li>
            <ul>
              <a>Categorias</a>
                <li><Link to="./Acao">Ação</Link></li>
                <li><Link to="./Aventura">Aventura</Link></li>
                <li><Link to="./Arcades">Arcades</Link></li>
                <li><Link to="./Familia">Familia</Link></li>
                <li><Link to="./Independentes">Independetes</Link></li>
                <li><Link to="./Jogos_RPG">Jogos_RPG</Link></li>
                <li><Link to="./Gratuitos">Gratuitos</Link></li>
                <li><Link to="./Terror">Torror</Link></li>
                <li><Link to="./Suspence">Suspence</Link></li>
            </ul>
          </ul>
          <button><Link to="./Login">Login</Link></button>
          <button><Link to="./Cadastro">Cadastro</Link></button>
        </nav>
        <Outlet />
      </>
  )
};

export default Menu;