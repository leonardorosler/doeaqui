import { useForm } from 'react-hook-form'
import './PesquisaHome.css'
import { useState } from 'react'
import ListaDoacoes from './components/ListaDoacoes'

export default function Pesquisa() {

    const { handleSubmit, reset, register } = useForm()
    const [doacoes, setDoacoes] = useState([])

    async function pesquisaDoacoes(data) {
        try {
            const resposta = await fetch("http://localhost:3000/doacoes")
            if (!resposta.ok) throw new Error("Erro ao consultar doações disponiveis")
            const dados = await resposta.json()
            const dados2 = dados.filter(doacoes => (
                doacoes.item.toUpperCase().includes(data.pesquisa.toUpperCase()) ||
                doacoes.categoria.toUpperCase().includes(data.pesquisa.toUpperCase())
            ))
            if (dados2.length == 0) {
                alert("Não há doações com a palavra pesquisada no título ou categoria")
            } else {
                setDoacoes(dados2)
            }
        } catch (erro) {
            console.log("Erro: ", erro.message)
        }
    }


    return (
        <div>
            <section className='container01'>
                <div className='texto'>
                    <h1>Doações Disponíveis</h1>
                    <p>Veja as ofertas e pedidos de doação mais recentes da nossa comunidade</p>
                </div>
                </section>
            <div className='cardPesquisaHome'>
                <form className='formPesquisaHome'
                    onSubmit={handleSubmit(pesquisaDoacoes)}>
                    <input type="text" className='campoPesquisaHome' required
                        placeholder="Palavra chave do título ou categoria"
                        {...register("pesquisa")} />          
                    <input type="image" src="pesquisaBranco.png" alt="Pesquisar" className='btnPesquisaHomeImg' />
                </form>
            </div>
            <ListaDoacoes doacoes={doacoes} setDoacoes={setDoacoes} />
        </div>
    )
}