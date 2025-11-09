import { useEffect } from 'react';
import './ListaDoacoes.css';
import { useForm } from 'react-hook-form';

export default function ListaDoacoes({ doacoes, setDoacoes }) {
  const { register, handleSubmit, reset } = useForm();

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

  return (
    <div className='doacao-card'>
      
      {doacoes.map(doacao => (
        <div className="containerDoacoes" key={doacao.id}>
            <div className='cardDoacao'>
              <div>
                <h2 className={getTipoDoacao(doacao.tipo)}>{doacao.tipo}</h2>
                <h1>{doacao.item}</h1>
                <h3><img src={getCategoriaEmoji(doacao.categoria)} className='img__cat'/> {doacao.categoria}</h3>
                <h4><img src="pin.png"/>{doacao.localizacao}</h4>
                <h4><img src="/doador.png" alt="" />{getTipoDoacao(doacao.tipo)}: {doacao.doador}</h4>
                <p>{doacao.descricao}</p>
                {/* <p>{doacao.tipo}</p> */}
              </div>
              <button>Entrar em contato <img src="contato.png"/></button>
            </div>
        </div>
      ))}
    </div>
  );
}