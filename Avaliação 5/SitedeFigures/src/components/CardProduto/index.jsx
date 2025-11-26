import {Link} from 'react-router-dom'

export default function CardProduto({ nome, valor, descricao, imagem }) {
  return (
    <div className="card-produto" id={id}>
      <img src={imagem} alt={nome} width="200" />
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <strong>R$ {valor}</strong>
      <Link to={`/DetalhesProduto/${id}`}>Ver Detalhes</Link>
    </div>
  );
}