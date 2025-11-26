const CampoTexto = (props) => {
    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value);
    }

    return(
        <div className="campoTexto">
            <label>{props.rotulo}</label>
            <input type="text" 
                    value={props.valor}
                    onChange={aoDigitado}
                    placeholder={props.placeholder}/>
        </div>
    );
}

export default CampoTexto;