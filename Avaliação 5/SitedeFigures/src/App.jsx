import './CSS/App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  const id = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <BrowserRouter>
    {/*Links de Navegação */}
    <nav>
      <Link to="/">Página Inicial</Link> |{" "}
      <Link to="/about">Sobre</Link> |{" "}
      <Link to="/vitrine">Vitrine</Link> |{" "}
      <Link to={`/DetalhesProduto/${id}`}>Detalhes do Produto</Link> |{" "} 
    </nav>

   {/* Definições de Rota */}
    <Routes>
      <Route path="/" element={<h1>Página Inicial</h1>} />
      <Route path="/about" element={<h1>Sobre</h1>} />
      <Route path="/vitrine" element={<h1>Vitrine</h1>} />
      <Route path={`/DetalhesProduto/${id}`} element={<h1>Detalhes do Produto</h1>} />
    </Routes>

    </BrowserRouter>
  )
}

export default App