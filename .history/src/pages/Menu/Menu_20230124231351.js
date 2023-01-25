import { Outlet, Link } from "react-router-dom";
import './estilo.css';


const Menu = () => {
  return (
      <>
        <nav id="menu">
          <ul>
            <li>
              <Link to="./Inicio">Inicio</Link>
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
                <ul><Link to="./Independentes">Independetes</Link></ul>
                <ul><Link to="./Jogos_RPG">Jogos_RPG</Link></ul>
                <ul><Link to="./Gratuitos">Gratuitos</Link></ul>
                <ul><Link to="./Terror">Torror</Link></ul>
                <ul><Link to="./Suspence">Suspence</Link></ul>
            </li>
          </ul>
          <button><Link to="./Login">Login</Link></button>
          <button><Link to="./Cadastro">Cadastro</Link></button>
        </nav>
        <Outlet />
      </>
  )
};

export default Menu;