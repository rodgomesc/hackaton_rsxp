import axios from 'axios';

const api = axios.create({
  baseURL: 'http://167.172.245.53:3001',
});

export default api;
