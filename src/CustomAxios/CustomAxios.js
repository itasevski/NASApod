import axios from "axios";

const CustomAxios = axios.create({
    baseURL: `https://api.nasa.gov/planetary`,
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
});

export default CustomAxios;