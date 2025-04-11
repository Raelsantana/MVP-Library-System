import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import AcervoPage from './pages/Acervo'
import RegisterBookPage from './pages/RegitroLivros/';

function App() {
  return (
    <Router>
      
      <Routes>
    <Route path="/" element={<AcervoPage />} />

    <Route path="/register-book" element={<RegisterBookPage />} />
    </Routes>

    </Router>

  )
}

export default App