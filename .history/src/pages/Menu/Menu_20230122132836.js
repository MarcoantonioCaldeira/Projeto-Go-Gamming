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
                <ul><Link to="./Categorias/Acao">Ação</Link></ul>
                <ul><Link to="./Categorias/Aventura">Aventura</Link></ul>
                <ul><Link to="./Categorias/Arcades">Arcades</Link></ul>
                <ul><Link to="./Categorias/Familia">Familia</Link></ul>
                <ul><Link to="./Categorias/Independes">Independetes</Link></ul>
                <ul><Link to="./Categorias/Jogos_RPG">Jogos_RPG</Link></ul>
                <ul><Link to="./Categorias/Gratuitos">Gratuitos</Link></ul>
                <ul><Link to="./Categorias/Terror">Torror</Link></ul>
                <ul><Link to="./Categorias/Suspence">Suspence</Link></ul>
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