import Cabecalho from '../../components/cabecalho/index.js';
import Menu from '../../components/menu/index.js';
import {Container, Conteudo, } from './styled.js';


export default function Index() {
    return (
        <Container>
            <Menu /> 
            <Conteudo>
                <Cabecalho />
                <div className="body-right-box">
                    <div className="new-student-box">
                        <div className="text-new-student">
                            <div className="bar-new-student"></div>
                            <div className="text-new-student">Novo Produto</div>
                        </div>
                        <div className="input-new-student"> 
                            <div className="input-left">
                                <div className="agp-input"> 
                                    
                                    <div className="name-student"> Nome: </div>  
                                    <div className="input, input2"> <input /> </div>  
                                </div> 
                                <div className="agp-input">
                                    <div className="number-student"> Categoria: </div>  
                                    <div className="input"> <input /> </div> 
                                </div>
                                <div className="avaliacao">
                                    <div className="ava1"> Avaliação: </div>
                                    <div className="ava2">  <input /> </div>                                
                                </div>
                            </div>
                            <div className="input-right">
                                <div className="agp-input">
                                    <div className="corse-student"> Preço DE: </div>  
                                    <div className="input"> <input /> </div>  
                                </div>
                                <div className="agp-input">
                                    <div className="class-student"> Preço POR: </div>  
                                    <div className="input"> <input /> </div> 
                                </div>
                                <div className="estoque">
                                    <div className="est1"> Estoque: </div>
                                    <div className="est2"> <input /> </div>
                                </div>
                            </div>
                        </div>
                        <div className="imagem">
                            <div className="img1"> Link Imagem: </div>
                            <div className="img2"> <input /> </div>
                        </div>
                        <div className="descricao">
                            <div className="desc1"> Descricao: </div>
                            <div className="desc2"> <textarea></textarea></div>
                            <div className="button-create"> <button> Cadastrar </button> </div>
                        </div>
                    </div>
    
                <div className="student-registered-box">
                    <div className="row-bar"> 
                        <div className= "bar-new-student"> </div>
                        <div className="text-registered-student"> Produtos Cadastrados </div>
                    </div>
                
                    <table className="table-user">
                        <thead>
                            <tr>
                                <th className="a"> </th>
                                <th > ID </th>
                                <th> Produto </th>
                                <th> Categoria </th>
                                <th> Preço </th>
                                <th> Estoque </th>
                                <th className="a"> </th>
                                <th className="a"> </th>

                            </tr>
                        </thead>
                
                        <tbody>
                            <tr >
                                <td className="fotinha"> <img src="https://d3pt1seq4txask.cloudfront.net/Custom/Content/Products/01/01/0101_refrigerante-coca-cola-lata-350ml-14_m6_637417305699974110.jpg" alt="" /></td>
                                <td> 1 </td>
                                <td> Coquinha Gelada</td>
                                <td> Refri </td>
                                <td> R$ 5,00 </td>
                                <td > 100 </td>
                                <td className="aa"> <button> <img src="../assets/images/editar.svg" alt="" /> </button> </td>
                                <td className= "aa">   <button> <img src="../assets/images/remover.svg" alt="" /> </button> </td>
                            </tr>   
                        
                            <tr className="int">
                                <td className="fotinha"> <img src="https://d3pt1seq4txask.cloudfront.net/Custom/Content/Products/01/01/0101_refrigerante-coca-cola-lata-350ml-14_m6_637417305699974110.jpg" alt="" /></td>
                                <td> 2 </td>
                                <td> Coquinha Gelada</td>
                                <td> Refri </td>
                                <td> R$ 5,00 </td>
                                <td > 100 </td>
                                <td className="aa"> <button> <img src="../assets/images/editar.svg" alt="" /> </button> </td>
                                <td className= "aa">   <button> <img src="../assets/images/remover.svg" alt="" /> </button> </td>
                            </tr>

                            <tr>
                                <td className="fotinha"> <img src="https://d3pt1seq4txask.cloudfront.net/Custom/Content/Products/01/01/0101_refrigerante-coca-cola-lata-350ml-14_m6_637417305699974110.jpg" alt="" /></td>
                                <td> 3 </td>
                                <td> Coquinha Gelada</td>
                                <td> Refri </td>
                                <td>  R$ 5,00 </td>
                                <td > 100 </td>
                                <td className="aa"> <button> <img src="../assets/images/editar.svg" alt="" /> </button> </td>
                                <td className= "aa">   <button> <img src="../assets/images/remover.svg" alt="" /> </button> </td>
                            </tr>

                            <tr className="int">
                                <td className="fotinha"> <img src="https://d3pt1seq4txask.cloudfront.net/Custom/Content/Products/01/01/0101_refrigerante-coca-cola-lata-350ml-14_m6_637417305699974110.jpg" alt="" /></td>
                                <td> 4 </td>
                                <td> Coquinha Gelada</td>
                                <td> Refri </td>
                                <td> R$ 5,00 </td>
                                <td> 100 </td>
                                <td className="aa"> <button> <img src="../assets/images/editar.svg" alt="" /> </button> </td>
                                <td className= "aa">   <button> <img src="../assets/images/remover.svg" alt="" /> </button> </td>
                            </tr>    
                        </tbody> 
                    </table>            
                </div>
            </div>
            </Conteudo>   
        </Container>
    );
}

