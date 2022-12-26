import { Outlet, Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav>
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
              <ul>Link to="./Jogos_RPG">Jogos_RPG</Link></ul>
              <ul>Jogos Gratuitos</ul>
              <ul>Terror</ul>
              <ul>Suspence</ul>
          </li>

        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Menu;