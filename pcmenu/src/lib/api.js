import axios from 'axios';

const database = axios.create({
  baseURL : 'https://study-1c4d9.firebaseio.com/'
});

export const getData = () => database.get('/menu.json');