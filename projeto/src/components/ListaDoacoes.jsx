import './ListaDoacoes.css';
import { useForm } from 'react-hook-form';

export default function ListaDoacoes({ doacoes, setDoacoes }) {
  const { register, handleSubmit, reset } = useForm();

  const getCategoriaEmoji = (categoria) => {
    if (categoria === "Roupas") return "👔";
    if (categoria === "Alimentos") return "🍎";
    if (categoria === "Moveis") return "🛋️";
    if (categoria === "Eletronicos") return "📱";
    if (categoria === "Livros") return "📚";
    if (categoria === "Brinquedos") return "🧸";
    return "📦"; // emoji padrão
  }

  return (
    <div className='doacao-card'>
      {doacoes.map(doacao => (
        <div className="containerDoacoes" key={doacao.id}>
            <div className='cardDoacao'>
              <div>
                <h3>{getCategoriaEmoji(doacao.categoria)} {doacao.categoria}</h3>
                <h2>{doacao.item}</h2>
                <h4>📍{doacao.localizacao}</h4>
                <h4>👤{doacao.doador}</h4>
                <p>{doacao.descricao}</p>
              </div>
            </div>
        </div>
      ))}
    </div>
  );
}