import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import AcervoPage from './pages/Acervo'
import RegisterBookPage from './pages/RegitroLivros/';
import RegisterLoanPage from './pages/RegistroEmprestimos';

function App() {
  return (
    <Router>
      
      <Routes>
    <Route path="/" element={<AcervoPage />} />

    <Route path="/register-book" element={<RegisterBookPage />} />

    <Route path="/register-loan" element={<RegisterLoanPage/>}/>
    </Routes>

    </Router>

  )
}

export default App