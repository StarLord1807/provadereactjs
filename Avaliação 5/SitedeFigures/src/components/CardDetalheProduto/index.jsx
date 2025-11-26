import { useEffect, useState } from "react";
import CardProduto from "../CardProduto";

export default function CardDetalheProduto() {
    const [produto, setProduto] = useState([]);

    useEffect(() => {
        async function carregarProduto(){
            const resposta = await fetch(`http://localhost:3001/pratos/${id}`);
            const dados = await resposta.json();
            setProduto(dados);
        }
        carregarProduto();
    }, []);

    return (<div>
        {produto && (
            <CardProduto
                nome={produto.nome}
                valor={produto.valor}
                descricao={produto.descricao}
                imagem={produto.imagem}
            />
        )}
    </div>
    );
}


/*
export default function ListaProdutos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function carregarProdutos() {
            const resposta = await fetch("http://localhost:3001/pratos");
            const dados = await resposta.json();
            setProdutos(dados);
        }

        carregarProdutos();
    }, []);

    return (
        <div>
            <h1>Vitrine</h1>

            <div className="container-produtos">
                {produtos.map((produto) => (
                    <CardProduto
                        key={produto.id}
                        nome={produto.nome}
                        valor={produto.valor}
                        descricao={produto.descricao}
                        imagem={produto.imagem}
                    />
                ))}
            </div>
        </div>
    );
}*/