import { Container } from './styled.js';


export default function Index() {
    return (
        <Container>
            <header class="header-left-box">
                <div class="svg-cabecalho-left-box"> <img src="public/assets/images/raposa.png" alt = "" /></div>
                <div class="devSchool"> <span>Dev</span>Store</div>
            </header>
            <div class="black-box"></div>
            <div class="left-box-management">
                <div> Gerenciamento </div>
                <img src="/assets/images/seta.png" alt = "" />
            </div>
            <div class="left-box-aluno">
                <div> Produtos </div>
            </div> 
        </Container>
    );
}