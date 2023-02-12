import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://messenger-backend-gamma.vercel.app:9000'
});

export default instance;