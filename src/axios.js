import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://v-chat-backend.onrender.com'
});

export default instance;