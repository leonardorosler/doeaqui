import { useEffect, useState } from 'react'
import './App.css'
import Cabecalho from './components/Cabecalho'
import ListaDoacoes from './components/ListaDoacoes'
import { Link } from 'react-router-dom';



function App() {

  const [doacoes, setDoacoes] = useState([])

  useEffect(() => {
    async function buscarDoacoes() {
      const resposta = await fetch("http://localhost:3000/doacoes")
      const dados = await resposta.json()
      setDoacoes(dados)
    }
    buscarDoacoes()
  }, [])


  return (
    <div className='app'>
      <Cabecalho />
      <main>
        <section className="hero">
          <div className='hero__conteudo'>
            <img src="heart-handshake branco.png" className='hero__img'/>
            <div className='hero__textos'>
              <h1 className='hero__titulo'>doeaqui!</h1>
              <h3 className='hero__sutitulo'>"Sua doação, nossa missão."</h3>
              <Link to="/doar">
                <button className='hero__botao'>doeaqui!</button>
              </Link>
            </div>
          </div>
      </section>
      </main>
      <ListaDoacoes doacoes={doacoes} setDoacoes={setDoacoes} />
    </div>
  )
}

export default App