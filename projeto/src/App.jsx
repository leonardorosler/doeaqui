import { useEffect, useState } from 'react'
import './App.css'
import Cabecalho from './components/Cabecalho'
import ListaDoacoes from './components/ListaDoacoes'


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
    <>
      <Cabecalho />
      <main className="main-fundo">
          <div className='main__div'>
            <img src="heart-handshake branco.png" className='main__img'/>
            <div className='main__textos'>
              <h1 className='main__titulo'>doeaqui!</h1>
              <h3 className='main__sutitulo'>"Sua doação, nossa missão."</h3>
              <button className='main__botao'>doeaqui!</button>
            </div>
          </div>
      </main>
      <ListaDoacoes doacoes={doacoes} setDoacoes={setDoacoes} />
    </>
  )
}

export default App
