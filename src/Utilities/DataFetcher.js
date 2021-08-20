import CustomAxios from "../CustomAxios/CustomAxios";
import { API_KEY } from "./Constants";

const DataFetcher = {
    fetchApodInfo: () => {
        return CustomAxios.get(`/apod?api_key=${API_KEY}&thumbs=true`);
    }
};

export default DataFetcher;