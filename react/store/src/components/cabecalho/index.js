import {Container} from './styled.js';


export default function Index() {
    return (
        <Container>
            <div className="reader-right-box">
               <div className= "box-user"> 
                    <div className="user-image"> <img src="/assets/images/brunex.png" alt=""  /><div class="absolute">3</div></div>  
                    <div className="user-name"> Olá, <b>  Bruno de Oliveira </b> </div>
                </div>
                <div className="box-image">
                    <div className="refresh-button"> <button> <img src="/assets/images/carregar.png" alt = "" />  </button> </div>
                    <div className="left-button"> <button> <img  src="/assets/images/sair.png"  alt="" /> </button> </div>
                </div>
            </div>
            <div className="bottom-bar-right-header"> </div>
        </Container>
    );
}

