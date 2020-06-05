import axios from 'axios';
import { env } from '../../env';


const client = axios.create({
    baseURL: env.HOST_API,
    timeout: 50000,
});

export default client;