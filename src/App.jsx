import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import BackToTop from './components/BackToTop.jsx';
import Home from './pages/Home.jsx';
import Especialidades from './pages/Especialidades.jsx';
import CorpoClinico from './pages/CorpoClinico.jsx';
import Perfil from './pages/Perfil.jsx';
import Convenios from './pages/Convenios.jsx';
import Blog from './pages/Blog.jsx';
import Contato from './pages/Contato.jsx';

// Rola para o topo (ou para uma seção) a cada navegação.
function ScrollManager() {
  const location = useLocation();
  useEffect(() => {
    const id = location.state && location.state.scrollTo;
    if (id) {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0 });
      }, 80);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location.key]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/medicos" element={<CorpoClinico />} />
        <Route path="/medicos/:slug" element={<Perfil />} />
        <Route path="/convenios" element={<Convenios />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </HashRouter>
  );
}
