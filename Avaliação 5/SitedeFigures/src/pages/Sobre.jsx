import BENTO from '../images/BENTO.jpg';
import GABIV from '../images/GABIV.jpg';

export default function Sobre() {
    return(
        <div className='container-produtos'>
            <h1>Sobre a Tech4Figures e seus criadores</h1>
            <h2>Quem somos nós?</h2>
            <div className='card-produto'>
                <h3>Bernardo Bento</h3>
                <img src={BENTO} alt="Bernardo Bento" width="200"/>
                <p> Este projeto é uma demonstração do que aprendemos ao longo do curso de Desenvolvimento Frontend. Escolhemos o tema de uma loja de action figures por combinar bem com nosso interesse por cultura geek e por permitir explorar um visual mais dinâmico. Durante o desenvolvimento, utilizamos HTML, CSS e conceitos fundamentais de estruturação de páginas. O processo reforçou meu aprendizado e minha evolução prática na programação. </p>
            </div>
            <div className='card-produto'>
                <h3>Gabriela Valentim</h3>
                <img src={GABIV} alt="Gabriela Valentim" width="200"/>
                <p>Este pequeno site que criei em parceria com Bento é uma pequena representação do que gostamos e do que aprendemos este ano com o curso de Desenvolvedor Frontend. Para esta atividade, apliquei conhecimentos que adquiri como a utilização de api, desenvolvimento de funções em java script e estruturação de sites em react. Foi um ano de muito estudo, aprendizado e também do começo à apreciação pela programação. </p>
            </div>
        </div>
    );
};