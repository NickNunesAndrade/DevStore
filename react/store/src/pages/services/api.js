import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:3030'
});

export default class Api {
   async listar() {
       let l = await api.get('/produto');
       return l.data;
   } 
}