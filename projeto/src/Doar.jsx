import { useEffect, useState } from 'react'
import Cabecalho from './components/Cabecalho'
import './Doar.css'
import ListaDoacoes from './components/ListaDoacoes'
import { useForm } from 'react-hook-form'
import PesquisaHome from './PesquisaHome'
import Footer from './components/Footer'

export default function Doar() {
    const [doacoes, setDoacoes] = useState([]);
    const { handleSubmit, register, reset, setFocus } = useForm();

    async function cadastraDoacao(data) {
        const item = data.item
        const categoria = data.categoria
        const localizacao = data.localizacao
        const doador = data.doador
        const whatsapp = data.whatsapp
        const descricao = data.descricao
        const tipo = "Oferta"

        try {
            const resposta = await fetch("http://localhost:3000/doacoes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    item, categoria, localizacao, doador, whatsapp, descricao, tipo
                })
            })
            if (!resposta.ok) throw new Error("Erro ao cadastrar doação")
            const novaDoacao = await resposta.json()
            alert(`Ok! Doação cadastrada com o código: ${novaDoacao.id}`)
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
            <main className='main-doar'>
                <h1>Doar Agora <img src="doar.png"/></h1>
                <form onSubmit={handleSubmit(cadastraDoacao)}>
                    <p>
                        <label htmlFor="item">O que deseja doar hoje?</label>
                        <input type="text" id="item"{...register("item")} placeholder='Ex: Roupas de inverno ' required/>
                    </p>
                    <p>
                        <label htmlFor="categoria">Categoria:</label>
                        <select id="categoria"{...register("categoria")} required>
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
                        <input type="text" id="localizacao"{...register("localizacao")} placeholder='Ex: Pelotas - RS' required
                        />
                    </p>
                    <p>
                        <label htmlFor="doador">Nome do Doador:</label>
                        <input type="text" id="doador"{...register("doador")} placeholder='Seu nome' required/>
                    </p>
                    <p>
                        <label htmlFor="whatsapp">Número de whatsapp para contato: (com DDD)</label>
                        <input type="text" id="whatsapp" {...register("whatsapp")} placeholder='Ex: 53999882722' required/>
                    </p>
                    <p>
                        <label htmlFor="descricao">Descrição:</label>
                        <textarea id="descricao" rows={3}{...register("descricao")}placeholder='Descreva o item em detalhes'required></textarea>
                    </p>
                    <input type="submit" value="Cadastrar Doação" className='btn submit' />
                    <input type="reset" value="Limpar" className='btn reset margem-esq' />
                </form>
            </main>
            {/* <ListaDoacoes doacoes={doacoes} setDoacoes={setDoacoes} /> */}
            <PesquisaHome />
            <Footer />
        </div>
    )
}