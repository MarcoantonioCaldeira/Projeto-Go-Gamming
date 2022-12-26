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
          </li>

        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Menu;