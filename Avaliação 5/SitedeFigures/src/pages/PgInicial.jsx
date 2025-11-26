import {Link} from 'react-router-dom'
import LOGO from '../images/LOGO.png'

export default function PgInicial() {
    return(
        <div className='card-produto'>
            <img src={LOGO} alt="Logo Tech4Figures" width={200}/>
            <h1>Tech4Figures</h1>
            <p>Bem-vindo à Tech4Figures, sua loja online de action figures!</p>
            <Link to="/vitrine" className="vitrine-Link">Ir para a Vitrine</Link>
        </div>
    );
};