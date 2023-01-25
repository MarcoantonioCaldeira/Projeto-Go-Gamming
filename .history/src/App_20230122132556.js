import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./pages/Menu/Menu";
import Inicio from "./pages/Inicio/Inicio";

//Categorias
import Jogos from "./pages/Jogos/Jogos";
import Acao from "./pages/Categorias/Acao";
import Aventura from "./pages/Categorias/Aventura";
import Arcades from "./pages/Categorias/Arcades";
import Familia from "./pages/Categorias/Familia";
import Independentes from "./pages/Categorias/Independes";
import Jogos_RPG from "./pages/Categorias/Jogos_RPG";
import Gratuitos from "./pages/Categorias/Gratuitos";
import Terror from "./pages/Categorias/Terror";
import Suspence from "./pages/Categorias/Suspence";


import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Menu />}>
        <Route path="Inicio" element={<Inicio />}/>
        <Route path="jogos" element={< Jogos />}/>
          <Route path="Acao" element={<Acao />}/>
          <Route path="Aventura" element={<Aventura />}/>
          <Route path="Arcades" element={<Arcades />}/>
          <Route path="Familia" element={<Familia />}/>
          <Route path="Independentes" element={<Independentes />}/>
          <Route path="Jogos_RPG" element={<Jogos_RPG />}/>
          <Route path="Gratuitos" element={<Gratuitos />}/>
          <Route path="Terror" element={<Terror />}/>
          <Route path="Suspence" element={<Suspence />}/>
        <Route path="Login" element={<Login />}/>
        <Route path="Cadastro" element={<Cadastro />}/>
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')) 
root.render(<App />);
export default App;
