import { useState } from 'react'
import './App.css'
import Cabecalho from './components/Cabecalho'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecalho />

    </>
  )
}

export default App
