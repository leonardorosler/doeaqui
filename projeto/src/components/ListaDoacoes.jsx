import { useEffect, useState } from 'react';
import './ListaDoacoes.css';
import { useForm } from 'react-hook-form';


export default function ListaDoacoes({ doacoes, setDoacoes }) {
  const { register, handleSubmit, reset } = useForm();
  const [favoritos, setFavoritos] = useState([]);


  useEffect(() => {
    // se já houver filmes "favoritados"
    if (localStorage.getItem("meusFavoritos")) {
      // carrega a lista (array) dos filmes na variável de estado
      const meusFavoritos = JSON.parse(localStorage.getItem("meusFavoritos"))
      setFavoritos(meusFavoritos)
    }
  }, [])

  function favoritaDoacao(id) {
    if (favoritos.includes(id)) return;
    const favoritos2 = [...favoritos, id];
    setFavoritos(favoritos2);
    // salva a lista em localStorage
    localStorage.setItem("meusFavoritos", JSON.stringify(favoritos2))
  }

  function desfavoritaDoacao(id) {
    // retira o item escolhido da variável de estado
    const favoritos2 = favoritos.filter(item => item !== id)
    setFavoritos(favoritos2)
    // salva a lista em localStorage
    localStorage.setItem("meusFavoritos", JSON.stringify(favoritos2))
  }

  useEffect(() => {
    async function buscarDoacoes() {
      const resposta = await fetch("http://localhost:3000/doacoes")
      const dados = await resposta.json()
      setDoacoes(dados)
    }
    buscarDoacoes()
  }, [])


  const getCategoriaEmoji = (categoria) => {
    if (categoria === "Roupas") return "/roupas.png";
    if (categoria === "Alimentos") return "/alimento.png";
    if (categoria === "Móveis") return "/moveis.png";
    if (categoria === "Eletrodomésticos") return "/eletrodomesticos.png";
    if (categoria === "Livros") return "/livros.png";
    if (categoria === "Brinquedos") return "/brinquedos.png";
    return "📦"; // emoji padrão
  }

  const getTipoDoacao = (tipo) => {
    if (tipo == "Oferta") return "Doador"
    if (tipo == "Pedido") return "Receptor"
  }

  const getLinkWhatsapp = (whatsapp) => {
    return `https://wa.me/55${whatsapp}`
  }
  return (
    <div className='doacao-card'>
      {doacoes?.map(doacao => (
        <div className="containerDoacoes" key={doacao.id}>
          <div className='cardDoacao'>
            <div>
              <h2 className={getTipoDoacao(doacao.tipo)}>{doacao.tipo}</h2>

              <h1>{doacao.item}</h1>

              <h3><img src={getCategoriaEmoji(doacao.categoria)} className='img__cat' /> {doacao.categoria}</h3>
              <h4><img src="pin.png" />{doacao.localizacao}</h4>
              <h4><img src="/doador.png" alt="" />{getTipoDoacao(doacao.tipo)}: {doacao.doador}</h4>
              <p>{doacao.descricao}</p>
            </div>
            <div className="acoes">
              <button className='contato_button'>
                <a href={getLinkWhatsapp(doacao.whatsapp)} target="_blank">Entrar em contato <img src="contato.png" alt="" /></a>
              </button>

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
  );
}