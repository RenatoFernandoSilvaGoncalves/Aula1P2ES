import TelaCadastroCliente from "./componentes/telas/telaCadastroCliente";
import TelaMenu from './componentes/telas/telaMenu';
import Tela404 from "./componentes/telas/tela404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaCadastroProduto from "./componentes/telas/telaCadastroProduto";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            { 
              //React Router DOM e seus componentes permitem associar rotas (urls) a componentes.
              //A ordem importa. A primeira rota definida tem prioridade. Depois a segunda ...
            }
            <Route path="/clientes" element={<TelaCadastroCliente/>} />
            <Route path="/produtos" element={<TelaCadastroProduto/>} />
            <Route path="/" element={<TelaMenu/>} />    
            <Route path="*" element={<Tela404/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
