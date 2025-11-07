import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cabecalho.css';


export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <>
      <header className="cabecalho">
        <div className="cabecalho__logo">
          <Link to="/">
            <img src="/doeaqui-logo-img-nome.png" alt="logo-doeaqui" />
          </Link>
        </div>

        {/* Menu Desktop */}
        <nav className="menu">
          <Link to="/">
            <img src="/home.png" alt="Home"/>Página principal
          </Link>
          <Link to="/doar">
            <img src="/doar.png" alt="Doar"/>Doar agora
          </Link>
          <Link to="/solicitar">
            <img src="/solicitar.png" alt="Solicitar"/>Solicitar doação
          </Link>
          <Link to="/sobre">
            <img src="/sobre nos.png" alt="Sobre"/>Sobre nós
          </Link>
        </nav>

        {/* Pesquisar (Desktop) */}
        <Link to="/pesquisa" className="pesquisar-desktop">
          <p><img src="pesquisa.png" alt="Pesquisar" />Pesquisar</p>
        </Link>

        {/* Botão Hamburguer (Mobile) */}
        <div className="menu-toggle-container">
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            ☰
          </button>

          {/* Overlay para fechar ao clicar fora */}
          {menuAberto && (
            <div 
              className="menu-overlay"
              onClick={fecharMenu}
            />
          )}
          
          {/* Menu Mobile Dropdown */}
          {menuAberto && (
            <div className="menu-mobile">
              <Link to="/" onClick={fecharMenu}>
                <img src="/home.png" alt="Home"/>Página principal
              </Link>
              <Link to="/doar" onClick={fecharMenu}>
                <img src="/doar.png" alt="Doar"/>Doar agora
              </Link>
              <Link to="/solicitar" onClick={fecharMenu}>
                <img src="/solicitar.png" alt="Solicitar"/>Solicitar doação
              </Link>
              <Link to="/sobre" onClick={fecharMenu}>
                <img src="/sobre nos.png" alt="Sobre"/>Sobre nós
              </Link>
              <div className="menu-mobile-divider"></div>
              <Link to="/pesquisa" onClick={fecharMenu}>
                <img src="/pesquisa.png" alt="Pesquisar"/>Pesquisar
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
}