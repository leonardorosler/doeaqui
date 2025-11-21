import { useEffect, useState } from 'react'
import Cabecalho from './components/Cabecalho'
import './Solicitar.css'
import { useForm } from 'react-hook-form'
import ListaDoacoes from './components/ListaDoacoes';
import PesquisaHome from './PesquisaHome'

export default function Solicitar() {
    const [doacoes, setDoacoes] = useState([]);
    const { handleSubmit, register, reset, setFocus } = useForm();

    async function cadastraPedido(data) {
        const item = data.item
        const categoria = data.categoria
        const localizacao = data.localizacao
        const doador = data.doador
        const descricao = data.descricao
        const tipo = "Pedido"

        try {
            const resposta = await fetch("http://localhost:3000/doacoes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    item, categoria, localizacao, doador, descricao, tipo
                })
            })
            if (!resposta.ok) throw new Error("Erro ao cadastrar pedido")
            const novoPedido = await resposta.json()
            alert(`Ok! Pedido cadastrado com o código: ${novoPedido.id}`)
            reset()
        } catch (erro) {
            console.log(`Erro: ${erro.message}`)
        }
    }

    useEffect(() => {
        setFocus("item")
    }, [])

    return (
        <div>
            <Cabecalho />
            <main className='main-solicitar'>
                <h1>Formulário de Solicitação</h1>
                <form onSubmit={handleSubmit(cadastraPedido)}>
                    <p>
                        <label htmlFor="item">O que você precisa?</label>
                        <input 
                            type="text" 
                            id="item"
                            {...register("item")} 
                            placeholder='Ex: Roupas de inverno infantil'
                            required
                        />
                    </p>
                    <p>
                        <label htmlFor="categoria">Categoria:</label>
                        <select 
                            id="categoria"
                            {...register("categoria")} 
                            required
                        >
                            <option value="">Selecione uma categoria</option>
                            <option value="Roupas">Roupas</option>
                            <option value="Alimentos">Alimentos</option>
                            <option value="Móveis">Móveis</option>
                            <option value="Eletrodomésticos">Eletrodomésticos</option>
                            <option value="Livros">Livros</option>
                            <option value="Brinquedos">Brinquedos</option>
                        </select>
                    </p>
                    <p>
                        <label htmlFor="localizacao">Localização:</label>
                        <input 
                            type="text" 
                            id="localizacao"
                            {...register("localizacao")} 
                            placeholder='Ex: Pelotas - RS'
                            required
                        />
                    </p>
                    <p>
                        <label htmlFor="doador">Seu Nome:</label>
                        <input 
                            type="text" 
                            id="doador"
                            {...register("doador")} 
                            placeholder='Seu nome'
                            required
                        />
                    </p>
                    <p>
                        <label htmlFor="descricao">Descrição do Pedido:</label>
                        <textarea 
                            id="descricao" 
                            rows={3}
                            {...register("descricao")}
                            placeholder='Descreva o que você precisa em detalhes'
                            required
                        ></textarea>
                    </p>
                    <input type="submit" value="Enviar Pedido" className='btn submit' />
                    <input type="reset" value="Limpar" className='btn reset margem-esq' />
                </form>
            </main>
            <PesquisaHome />
            {/* <ListaDoacoes doacoes={doacoes} setDoacoes={setDoacoes} /> */}
        </div>
    )
}