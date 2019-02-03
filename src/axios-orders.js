import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://reactburger-6a144.firebaseio.com/'
});

export default instance;