import axios from 'axios';
import {isObject, isString} from '../utils';


const baseURL = `https://test.ofd.astralnalog.ru/api/v4.2/`
export const ASTRAL_TOKEN = 'efde40c5-099d-4cbd-a85a-73b47ab57790';

const network = axios.create({
  baseURL,
  headers: {
    'astral-token': ASTRAL_TOKEN,
     common: {
      "Content-Type": "application/json"
    }
  },
});

network.interceptors.request.use(config=>{
  if (config.data)
  {
  if (isObject(config.data)) 
    config.data = qs.stringify({...config.data});
  if (isString(config.data))
    config.data = qs.parse(config.data); 
  }
  return config;
})

network.interceptors.response.use((response)=>
{
  console.log(response);
  return response;
})

export default network;