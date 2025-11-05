import { useState } from 'react';
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
          <img src="/doeaqui-logo-img-nome.png" alt="logo-doeaqui" />
        </div>

        {/* Menu Desktop */}
        <nav className="menu">
          <a href="#"><img src="/home.png"/>Página principal</a>
          <a href="#"><img src="/doar.png"/>Doar agora</a>
          <a href="#"><img src="/solicitar.png"/>Solicitar doação</a>
          <a href="#"><img src="/sobre nos.png"/>Sobre nós</a>
        </nav>

        {/* Pesquisar (Desktop) */}
        <div className="pesquisar-desktop">
          <p><img src="pesquisa.png" alt="" />Pesquisar</p>
        </div>

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
              <a href="#" onClick={fecharMenu}><img src="/home.png"/>Home</a>
              <a href="#" onClick={fecharMenu}><img src="/doar.png"/>Doar agora</a>
              <a href="#" onClick={fecharMenu}><img src="/solicitar.png"/>Solicitar doação</a>
              <a href="#" onClick={fecharMenu}><img src="/sobre nos.png"/>Sobre nós</a>
              <div className="menu-mobile-divider"></div>
              <button onClick={fecharMenu}><img src="/pesquisa.png"/>Pesquisar</button>
            </div>
          )}
        </div>
      </header>

    </>
  );
}