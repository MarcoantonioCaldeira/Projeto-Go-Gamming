import { Outlet, Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="./Jogos">Jogos</Link>
          </li>
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Menu;