import Cabecalho from './components/Cabecalho'
import Footer from './components/Footer'
import './SobreNos.css'

export default function SobreNos(){
    return(
        <div className='sobrenos-main'>
            <Cabecalho />
            <section className='textos'>
                <h1>Sobre o <span className='doeaqui'>doeaqui!</span></h1>
                <p>Uma plataforma criada para conectar pessoas através da generosidade e transformar vidas pela solidariedade</p>
            </section>
            <section className='missao'>
                <img src="/heart-handshake azul.png" alt="" />
                <h2>Nossa Missão</h2>
                <p>O <span className='doeaqui'>doeaqui!</span> nasceu com o propósito de facilitar o ato de doar e criar uma ponte entre quem tem o que oferecer e quem precisa receber. Acreditamos que a solidariedade pode ser simples, organizada e acessível para todos.</p>
            </section>
            <section className='valores'>
                <h2>Nossos Valores</h2>
                <p className='valores-paragrafo'>Princípios que guiam nosso trabalho e nossa missão</p>
                <div className='valores-cards'>
                    <div className='card01'>
                        <img src="/fav_icon.png"/>
                        <h3>Solidariedade</h3>
                        <p>Acreditamos no poder da generosidade e da empatia para transformar vidas.</p>
                    </div>
                    <div className='card01'>
                        <img src="/comunidade.png"/>
                        <h3>Comunidade</h3>
                        <p>Fortalecemos laços entre pessoas que querem ajudar e quem precisa de ajuda.</p>
                    </div>
                    <div className='card01'>
                        <img src="/transparencia.png"/>
                        <h3>Transparência</h3>
                        <p>Mantemos um processo claro e direto para conectar doadores e beneficiários</p>
                    </div>
                    <div className='card01'>
                        <img src="/impacto.png"/>
                        <h3>Impacto</h3>
                        <p>Cada doação faz diferença na vida de quem recebe e quem apoia</p>
                    </div>
                </div>
            </section>
            <section className='comofunciona'>
                <div className='titulo'>
                    <h2>Como Funciona</h2>
                    <p>Simples, rápido e eficiente</p>
                </div>
                <div className='passos'>
                    <div className='passo01'>
                        <h1>1</h1>
                        <div>
                            <h3>Cadastre sua doação ou pedido</h3>
                            <p>Utilize nosso formulário simples para ofertar ou solicitar itens.</p>
                        </div>
                    </div>
                    <div className='passo01'>
                        <h1>2</h1>
                        <div>
                            <h3>Conecte-se com a comunidade</h3>
                            <p>Navegue pelas ofertas e pedidos disponíveis em sua região.</p>
                        </div>
                    </div>
                    <div className='passo01'>
                        <h1>3</h1>
                        <div>
                            <h3>Entre em contato</h3>
                            <p>Use o botão de contato para combinar os detalhes da doação.</p>
                        </div>
                    </div>
                    <div className='passo01'>
                        <h1>4</h1>
                        <div>
                            <h3>Faça a diferença</h3>
                            <p>Complete a doação e transforme vidas através da generosidade.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}