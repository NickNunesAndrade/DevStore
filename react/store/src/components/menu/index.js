import { Container } from './styled.js';


export default function Index() {
    return (
        <Container>
            <header className="header-left-box">
                <div className="svg-cabecalho-left-box"> <img src="/assets/images/raposa.png" alt = "" /></div>
                <div className="devSchool"> <span>Dev</span>Store</div>
            </header>
            <div className="black-box"></div>
            <div className="left-box-management">
                <div> Gerenciamento </div>
                <div><img src="/assets/images/seta.png" alt = "" /></div>
            </div>
            <div className="left-box-aluno">
                <div> Produtos </div>
            </div> 
        </Container>
    );
}