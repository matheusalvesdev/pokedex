import axios from 'axios'
import { APIURL } from '../constants/variables';

const apiRequest = async(props) => {
    try {
        const request = await axios({
            method: props.method,
            url: APIURL + props.url,
            headers: props.headers,
            data: props.data,
            params: props.params
        });

        return ({
            success: true,
            return: request,
        });
    } catch (error) {
        return ({
            success: false,
            return: error
        });
    }
}

export default apiRequest;