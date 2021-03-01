import axios from "axios";
import { get } from "lodash";

class ApiService {

    async get(url, params) {
        try {
            let response = await axios.get(url, params = {});
            return get(response, 'data', []);
        } catch (error) {
            console.log('Error (GET):', error);
        }
    }
}

export default new ApiService();