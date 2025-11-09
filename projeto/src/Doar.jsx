import { useEffect, useState } from 'react'
import Cabecalho from './components/Cabecalho'
import './Doar.css'
import ListaDoacoes from './components/ListaDoacoes'
import { useForm } from 'react-hook-form'

export default function Doar() {
    const [doacoes , setDoacoes] = useState ([]);
    const { handleSubmit, register, reset } = useForm();

  return (
    <div>
        {/* <Cabecalho /> */}
        <main className='main-doar'>
          {/* <ListaDoacoes doacoes={doacoes} setDoacoes={setDoacoes} /> */}
          <h1>Formluario de doação</h1>
          <form /*onSubmit={handleSubmit(cadastraDoacao)}*/>
            <p>
              <label>Oque deseja doar hoje?</label>
              <input type="text" {...register("item")} required/>
            </p>
            <p>
              {/*terminar formulario de doacao*/}
            </p>
          </form>
        </main>
      
    </div>
  )
}