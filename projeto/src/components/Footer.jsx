import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


export default function Footer() {


    return (
        <>
            <footer className='footer'>
                <div className="footer__logo">
                    <div>
                        <img src="/aperto-de-mao.png" alt="logo-doeaqui" />
                        <h2>doeaqui!</h2>
                    </div>
                    <p>© 2025 DoeAqui. Todos os direitos reservados.</p>
                </div>
                <div className='menu'>
                    <nav className='nav_menu'>
                        <ul>
                          <li><Link to="/" className="nav_link"><img src="/home-footer.png" alt="Home" /> <span>Página principal</span></Link></li>
                          <li><Link to="/doar" className="nav_link"><img src="/doar-footer.png" alt="Doar" /> <span>Doar agora</span></Link></li>
                          <li><Link to="/solicitar" className="nav_link"><img src="/solicitar-footer.png" alt="Solicitar" /> <span>Solicitar doação</span></Link></li>
                          <li><Link to="/sobre" className="nav_link"><img src="/sobre nos-footer.png" alt="Sobre" /> <span>Sobre nós</span></Link></li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </>
    );
}