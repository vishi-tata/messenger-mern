import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://distinct-worm-earmuffs.cyclic.app:9000'
});

export default instance;