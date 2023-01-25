import { Outlet, Link } from "react-router-dom";
import './estilo.css';


const Menu = () => {
  return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="./Iniicio">Inicio</Link>
            </li>
            <li>
              <Link to="./Jogos">Jogos</Link>
            </li>
            <li>
              <a>Categorias</a>
                <ul><Link to="./Acao">Ação</Link></ul>
                <ul><Link to="./Aventura">Aventura</Link></ul>
                <ul><Link to="./Arcades">Arcades</Link></ul>
                <ul><Link to="./Familia">Familia</Link></ul>
                <ul><Link to="./Independes">Independetes</Link></ul>
                <ul><Link to="./Jogos_RPG">Jogos_RPG</Link></ul>
                <ul><Link to="./Gratuitos">Gratuitos</Link></ul>
                <ul><Link to="./Terror">Torror</Link></ul>
                <ul><Link to="./Suspence">Suspence</Link></ul>
            </li>
          </ul>
        
        </nav>
        <Outlet />
      </>
  )
};

export default Menu;