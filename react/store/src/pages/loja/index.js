import Cabecalho from '../../components/cabecalho/index.js';
import Menu from '../../components/menu/index.js';
import {Container, Conteudo, } from './styled.js';


export default function Index() {
    return (
        <Container>
            <Menu />
            <Conteudo />
                <Cabecalho />
                <div class="body-right-box">
                    <div class="new-student-box">
                        <div class="text-new-student">
                            <div class="bar-new-student"></div>
                            <div class="text-new-student">Novo Produto</div>
                        </div>
                        <div class="input-new-student"> 
                            <div class="input-left">
                                <div class="agp-input"> 
                                    
                                    <div class="name-student"> Nome: </div>  
                                    <div class="input, input2"> <input /> </div>  
                                </div> 
                                <div class="agp-input">
                                    <div class="number-student"> Categoria: </div>  
                                    <div class="input"> <input /> </div> 
                                </div>
                                <div class="avaliacao">
                                    <div class="ava1"> Avaliação: </div>
                                    <div class="ava2">  <input /> </div>                                
                                </div>
                            </div>
                        </div>
                        <div class="input-right">
                            <div class="agp-input">
                                <div class="corse-student"> Preço DE: </div>  
                                <div class="input"> <input /> </div>  
                            </div>
                            <div class="agp-input">
                                <div class="class-student"> Preço POR: </div>  
                                <div class="input"> <input /> </div> 
                            </div>
                            <div class="estoque">
                                <div class="est1"> Estoque: </div>
                                <div class="est2"> <input /> </div>
                            </div>
                        </div>
                    </div>
                    <div class="imagem">
                        <div class="img1"> Link Imagem: </div>
                        <div class="img2"> <input /> </div>
                    </div>
                    <div class="descricao">
                        <div class="desc1"> Descricao: </div>
                        <div class="desc2"> <textarea></textarea></div>
                        <div class="button-create"> <button> Cadastrar </button> </div>
                    </div>
                </div>
    
                <div class="student-registered-box">
                    <div class="row-bar"> 
                        <div class= "bar-new-student"> </div>
                        <div class="text-registered-student"> Produtos Cadastrados </div>
                    </div>
                
                    <table class ="table-user">
                        <thead>
                            <tr>
                                <th class="a"> </th>
                                <th > ID </th>
                                <th> Produto </th>
                                <th> Categoria </th>
                                <th> Preço </th>
                                <th> Estoque </th>
                                <th class="a"> </th>
                                <th class="a"> </th>
                            </tr>
                        </thead>
                
                        <tbody>
                            <tr >
                                <td class="fotinha"> <img src="" alt="" /></td>
                                <td> 1 </td>
                                <td> Coquinha Gelada</td>
                                <td> Refri </td>
                                <td> R$ 5,00 </td>
                                <td > 100 </td>
                                <td class="aa"> <button> <img src="public/assets/images/editar.svg" alt="" /> </button> </td>
                                <td class = "aa">   <button> <img src="public/assets/images/remover.svg" alt="" /> </button> </td>
                            </tr>   
                        
                            <tr class="int">
                                <td class="fotinha"> <img src="" alt="" /></td>
                                <td> 2 </td>
                                <td> Coquinha Gelada</td>
                                <td> Refri </td>
                                <td> R$ 5,00 </td>
                                <td > 100 </td>
                                <td>   </td>
                                <td>   </td>
                            </tr>

                            <tr>
                                <td class="fotinha"> <img src="" alt="" /></td>
                                <td> 3 </td>
                                <td> Coquinha Gelada</td>
                                <td> Refri </td>
                                <td>  R$ 5,00 </td>
                                <td > 100 </td>
                                <td>   </td>
                                <td>   </td>
                            </tr>

                            <tr class="int">
                                <td class="fotinha"> <img src="" alt="" /></td>
                                <td> 4 </td>
                                <td> Coquinha Gelada</td>
                                <td> Refri </td>
                                <td> R$ 5,00 </td>
                                <td> 100 </td>
                                <td>   </td>
                                <td>   </td>
                            </tr>    
                        </tbody> 
                    </table>            
                </div>    
        </Container>
    );
}