import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:3030/'
});

export default class Api {
   async listar() {
       let r = await api.get('/produto');
       return r.data;
    }
    
    async adicionar(nome, categoria, avaliacao, precoDe, precoPor, estoque, imgProduto, descricao ) {
        let r = await api.post('/produto', {nome, categoria, avaliacao, precoDe, precoPor, estoque, imgProduto, descricao});
        
        if( nome === "" || categoria === "" || avaliacao === "" || precoDe === "" || precoPor === "" || estoque === "" || imgProduto === "" || descricao === "") {
            return "Tem algum campo nulo !!";
        } else if( avaliacao <= 0 || precoDe <= 0 || precoPor <= 0 || estoque <= 0 ) {
            return "Alguns campos nao pode ter numeros negativos";
        } else {
            return r.data;
        }
    }

    async editar(id, nome, categoria, avaliacao, precoDe, precoPor, estoque, imgProduto, descricao ) {
        let r = await api.put(`/produto/${id}`, {nome, categoria, avaliacao, precoDe, precoPor, estoque, descricao, imgProduto});
        return r.data;
    }

    async remover(id) {
        let r = await api.delete(`/produto/${id}`);
        return r.data;
    }
}