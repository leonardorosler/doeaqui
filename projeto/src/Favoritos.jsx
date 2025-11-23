import { useForm } from 'react-hook-form'
import Cabecalho from './components/Cabecalho'
import './Favoritos.css'
import { useEffect, useState } from 'react'
import ListaDoacoes from './components/ListaDoacoes'
import { Link } from 'react-router-dom';
import Footer from './components/Footer'


export default function Favoritos() {
  const [doacoes, setDoacoes] = useState([])
  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    const raw = localStorage.getItem('meusFavoritos')
    setFavoritos(raw ? JSON.parse(raw) : [])
  }, [])

  useEffect(() => {
    async function buscarDoacoes() {
      try {
        const resposta = await fetch('http://localhost:3000/doacoes')
        if (!resposta.ok) throw new Error('Erro ao buscar doações')
        const dados = await resposta.json()
        setDoacoes(dados)
      } catch (erro) {
        console.error('Erro ao buscar doacoes:', erro)
      }
    }
    buscarDoacoes()
  }, [])

  function salvaFavoritos(novos) {
    setFavoritos(novos)
    localStorage.setItem('meusFavoritos', JSON.stringify(novos))
  }

  function favoritaDoacao(id) {
    if (favoritos.includes(id)) return
    salvaFavoritos([...favoritos, id])
  }

  function desfavoritaDoacao(id) {
    salvaFavoritos(favoritos.filter(item => item !== id))
  }

  const getCategoriaEmoji = (categoria) => {
    if (categoria === "Roupas") return "/roupas.png"
    if (categoria === "Alimentos") return "/alimento.png"
    if (categoria === "Móveis") return "/moveis.png"
    if (categoria === "Eletrodomésticos") return "/eletrodomesticos.png"
    if (categoria === "Livros") return "/livros.png"
    if (categoria === "Brinquedos") return "/brinquedos.png"
    return "📦"
  }

  const getTipoDoacao = (tipo) => {
    if (tipo === "Oferta") return "Doador"
    if (tipo === "Pedido") return "Receptor"
    return ""
  }

  const favoritosDoacoes = doacoes.filter(d => favoritos.includes(d.id))

  return (
    <div className='favoritos'>
      <Cabecalho />
      <main className="favoritos-main">
        <h1 className='titulo'>Meus Favoritos <img src="fav_icon.png"/></h1>
        

        {favoritosDoacoes.length === 0 ? (
          <div className='semfavoritos'>
            <img src="/semfavoritos.png" className='coracaoquebrado'/>
            <h3>Nenhum favorito ainda</h3>
            <p>Comece a salvar doações que te interessam clicando no ícone de coração</p>
            <div className="botao">
              <Link to="/">
               <img src="/heart.png" alt="Home"/>
              </Link>
            </div>
          </div>
        ) : (
          <div className='doacao-card'>
            {favoritosDoacoes.map(doacao => (
              <div className="containerDoacoes" key={doacao.id}>
                <div className='cardDoacao'>
                  <div>
                    <h2 className={getTipoDoacao(doacao.tipo)}>{doacao.tipo}</h2>
                    <h1>{doacao.item}</h1>
                    <h3>
                      <img src={getCategoriaEmoji(doacao.categoria)} className='img__cat' alt={doacao.categoria} /> {doacao.categoria}
                    </h3>
                    <h4><img src="/pin.png" alt="local" />{doacao.localizacao}</h4>
                    <h4><img src="/doador.png" alt="doador" />{getTipoDoacao(doacao.tipo)}: {doacao.doador}</h4>
                    <p>{doacao.descricao}</p>
                  </div>
                  <div className="acoes">
                    <button className='contato_button'>
                      <a href="https://wa.me/">Entrar em contato <img src="/contato.png" alt="contato" /></a></button>
                    {favoritos.includes(doacao.id) ? 
                    <button onClick={() => desfavoritaDoacao(doacao.id)} className='btn-favorito-destaque'>
                      <img src="/unfav_icon.png" alt="Remover favorito" />
                    </button> :
                    <button onClick={() => favoritaDoacao(doacao.id)} className='btn-favorito'>
                      <img src="/fav_icon.png" alt="Favoritar" />
                    </button>
                  }

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
