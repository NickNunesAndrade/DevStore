import Cabecalho from '../../components/cabecalho/index.js';
import Menu from '../../components/menu/index.js';
import {Container, Conteudo, } from './styled.js';
import { useState, useEffect, useRef } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar';
import Api from '../services/api';
const api = new Api();

export default function Index() {
    const [loja, setLoja] = useState([]);
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [avaliacao, setAvaliacao] = useState('');
    const [precoDe, setPrecoDe] = useState('');
    const [precoPor, setPrecoPor] = useState('');
    const [estoque, setEstoque] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imgProduto, setImgProduto] = useState('');
    const [idAltera, setIdAltera] = useState(0);
    let loading = useRef(null);

    async function listar() {
        loading.current.continuousStart();

        let lista = await api.listar();
        setLoja(lista);

        loading.current.complete();
    }

    async function inserir() {
        loading.current.continuousStart();

        if(idAltera === 0) {
            let r = await api.adicionar(nome, categoria, avaliacao, precoDe, precoPor, estoque, imgProduto, descricao);
            if(r.erro) 
                    toast.error(r.erro);
            else {
                    toast.dark('Produto Inserido !!');
                }
        } else {
            let r = await api.editar(idAltera, nome, categoria, avaliacao, precoDe, precoPor, estoque, imgProduto, descricao);
            if(r.erro) 
                    toast.error(r.erro);
            else {
                    toast.dark('Produto Alterado !!');
            }
        }
        limparCampos();
        listar();

        loading.current.complete();
    }

    function remover(id) {
        loading.current.continuousStart();
        confirmAlert({
            title: 'Remover Aluno',
            message: `Tem certeza que deseja remover o produto ${id}`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        let r = await api.remover(id);
                        if(r.erro)
                            toast.error(r.erro);
                        else {
                            toast.dark('Produto removido !!');
                            listar();
                        }
                    }
                },
                {
                    label: 'Nao'
                }
            ]
        });
        loading.current.complete();
    }

    async function edita(loj) {
        loading.current.continuousStart();

        setNome(loj.nm_produto);
        setCategoria(loj.ds_categoria);
        setAvaliacao(loj.vl_avaliacao);
        setPrecoDe(loj.vl_preco_de);
        setPrecoPor(loj.vl_preco_por);
        setEstoque(loj.qtd_estoque);
        setDescricao(loj.ds_produto);
        setImgProduto(loj.img_produto);
        setIdAltera(loj.id_produto);

        loading.current.complete();
    }

    function limparCampos() {
        setNome('');
        setCategoria('');
        setAvaliacao('');
        setPrecoDe('');
        setPrecoPor('');
        setEstoque('');
        setDescricao('');
        setImgProduto('');
        setIdAltera(0);
    }

    useEffect(() => {
        loading.current.continuousStart();

        listar();

        loading.current.complete();
    }, []);

    return (
        <Container>
            <LoadingBar color="#01e9ff" height={6} ref={loading} />
            <ToastContainer />

            <Menu /> 
            <Conteudo>
                <Cabecalho />
                <div className="body-right-box">
                    <div className="new-student-box">
                        <div className="text-new-student">
                            <div className="bar-new-student"></div>
                            <div className="text-new-student"> { idAltera === 0 ? "Novo Produto" : "Alterando Produto" + idAltera } </div>
                        </div>
                        <div className="input-new-student"> 
                            <div className="input-left">
                                <div className="agp-input"> 
                                    
                                    <div className="name-student"> Nome: </div>  
                                    <div className="input, input2"> <input type="text" value={nome} onChange={e => setNome(e.target.value)} /> </div>  
                                </div> 
                                <div className="agp-input">
                                    <div className="number-student"> Categoria: </div>  
                                    <div className="input"> <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)}/> </div> 
                                </div>
                                <div className="avaliacao">
                                    <div className="ava1"> Avaliação: </div>
                                    <div className="ava2">  <input type="text" value={avaliacao} onChange={e => setAvaliacao(e.target.value)}/> </div>                                
                                </div>
                            </div>
                            <div className="input-right">
                                <div className="agp-input">
                                    <div className="corse-student"> Preço DE: </div>  
                                    <div className="input"> <input  type="text" value={precoDe} onChange={e => setPrecoDe(e.target.value)}/></div>  
                                </div>
                                <div className="agp-input">
                                    <div className="class-student"> Preço POR: </div>  
                                    <div className="input"> <input  type="text" value={precoPor} onChange={e => setPrecoPor(e.target.value)}/></div> 
                                </div>
                                <div className="estoque">
                                    <div className="est1"> Estoque: </div>
                                    <div className="est2"> <input  type="text" value={estoque} onChange={e => setEstoque(e.target.value)}></input></div>
                                </div>
                            </div>
                        </div>
                        <div className="imagem">
                            <div className="img1"> Link Imagem: </div>
                            <div className="img2"><input type="text" value={imgProduto} onChange={e => setImgProduto(e.target.value)} /></div>
                        </div>
                        <div className="descricao">
                            <div className="desc1"> Descricao: </div>
                            <div className="desc2"> <textarea type="text" value={descricao} onChange={e => setDescricao(e.target.value)}></textarea></div>
                            <div className="button-create"> <button onClick={inserir}> { idAltera === 0 ? "Cadastrar" : "Alterar" } </button> </div>
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
                            {loja.map((loj, lo) => 
                                <tr className={ lo % 2 === 0 ? "int" : "" }>
                                    <td className="fotinha"><img src={loj.img_produto} alt=""/></td>
                                    <td> {loj.id_produto} </td>
                                    <td title={loj.nm_produto}> 
                                        { loj.nm_produto != null && loj.nm_produto.length >= 20 
                                                ? loj.nm_produto.substr(0, 20) + '...'
                                                : loj.nm_produto} 
                                    </td> 
                                    <td> {loj.ds_categoria} </td>
                                    <td> {loj.vl_preco_por} </td>
                                    <td > {loj.qtd_estoque} </td>
                                    <td className="aa"> <button onClick={() => edita(loj)} > <img src="../assets/images/editar.svg" alt="" /> </button> </td>
                                    <td className= "aa"><button onClick={() => remover(loj.id_produto)}><img src="../assets/images/remover.svg" alt=""/></button></td>
                                </tr>
                            )}
                                
                        </tbody> 
                    </table>            
                </div>
            </div>
            </Conteudo>   
        </Container>
    );
}

