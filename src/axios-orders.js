import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-stuff-kk.firebaseio.com/'
});

export default instance;