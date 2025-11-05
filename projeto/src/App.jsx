import { useState } from 'react'
import './App.css'
import Cabecalho from './components/Cabecalho'


function App() {
  const [count, setCount] = useState(0)

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
    </>
  )
}

export default App
