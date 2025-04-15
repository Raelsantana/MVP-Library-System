import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import AcervoPage from './pages/Acervo'
import RegisterBookPage from './pages/RegistroLivros';
import RegisterLoanPage from './pages/RegistroEmprestimos';
import RegisterUser from './pages/RegistroUsuario';
import UsuariosPage from './pages/Usuarios';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<AcervoPage />} />
                <Route path="/acervo" element={<AcervoPage />} />
                <Route path="/usuarios" element={<UsuariosPage />} />
            </Routes>
        </Router>

    )
}

export default App