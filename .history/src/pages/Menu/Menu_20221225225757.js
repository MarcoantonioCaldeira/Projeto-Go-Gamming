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
              <ul>Ação</ul>
              <ul>Aventura</ul>
              <ul>Corrida</ul>
              <ul>Independentes</ul>
              <ul></ul>
          </li>

        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Menu;