import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.pokemontcg.io/v2/',
});

export default axiosInstance;
