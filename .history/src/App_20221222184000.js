import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu/Menu";
import Inicio from "./pages/Inicio/Inicio";
import Jogos from "./pages/Jogos/Jogos";


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Menu />}>
        <Route path="inicio" element={<Inicio />}/>
        <Route path="jogos" element={< Jogos />}/>
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')) 
export default App;
