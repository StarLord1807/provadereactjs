import { useState } from "react";
import CampoTexto from "../CampoTexto";

export default function Formulario() {
   const [nome, setNome] = useState("");const [email, setEmail] = useState("");

   const aoSalvar = (evento) =>{
    evento.preventDefault();
    setNome('');
    setEmail('');
   };

   return (
    <div className="formulario">
        <p>Faça cadastro em nosso site para receber promoções!</p>
        <form onSubmit={aoSalvar}>
            <CampoTexto
            rotulo="Nome"
            placeholder="Digite seu nome"
            valor={nome}
            aoAlterado={valor => setNome(valor)}
            />
            <CampoTexto
            rotulo="Email"
            placeholder="Digite seu email"
            valor={email}
            aoAlterado={valor => setEmail(valor)}
            />
            <button type="submit" className="botaoEnviar">Enviar</button>

        </form>
    </div>
    );
};