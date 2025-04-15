import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import AcervoPage from './pages/Acervo'
import RegisterBookPage from './pages/RegitroLivros/';
import RegisterLoanPage from './pages/RegistroEmprestimos';
import RegisterUser from './pages/RegistroUsuario';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<AcervoPage />} />
                <Route path="/acervo" element={<AcervoPage />} />
                {/*                 
                <Route path="/register-loan" element={<RegisterLoanPage />} />
                <Route path="/register-user" element={<RegisterUser />} /> */}
            </Routes>
        </Router>

    )
}

export default App