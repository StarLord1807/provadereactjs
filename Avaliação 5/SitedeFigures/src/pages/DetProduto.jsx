import { useEffect, useState } from "react";
import CardProduto from "../CardProduto";
import CampoTexto from "../components/CampoTexto";
import CardDetalheProduto from "../components/CardDetalheProduto";
import Formulario from "../components/Fromulario";


export default function DetalhesProduto() {
    return(
        <div className="container-produtos">
            <h1>Detalhes do Produto</h1>
            <CardDetalheProduto />
            <Formulario />
        </div>
    )
}