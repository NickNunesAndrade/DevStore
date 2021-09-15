import {Container} from './styled.js';


export default function Index() {
    return (
        <Container>
            <div className="reader-right-box">
               <div className= "box-user"> 
                 <div className="user-image">  <img src="public/assets/images/brunex.png" alt = ""> <div class="absolute">  3   </div> </img> </div> 
                    '
                    div class="user-name"> Olá, <b>  Bruno de Oliveira </b> </div>
                </div>
                <div class="box-image">
                    <div class="refresh-button"> <button> <img src="public/assets/images/carregar.png" alt = "" />  </button> </div>
                    <div class="left-button"> <button> <img src="public/assets/images/sair.png" alt = "" />  </button> </div>
                </div>
            </div>
            <div class="bottom-bar-right-header"> </div>
        </Container>
    );
}MI6