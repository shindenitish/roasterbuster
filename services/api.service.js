import axios from "axios";
import { get } from "lodash";

class ApiService {

    async get(url, params) {
        try {
            let response = await axios.get(url, params = {});
            return Promise.resolve(get(response, 'data', []));
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

export default new ApiService();