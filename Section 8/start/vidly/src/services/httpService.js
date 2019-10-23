import axios from 'axios';
import { toast } from 'react-toastify';
axios.interceptors.response.use(null, error => {
    //expected error.
    if (error.response && error.response.status >= 400 && error.response.status < 500)
        return Promise.reject(error);
    console.log('Loggin the error', error);
    //unexpected error
    toast.error('An unexpected error occurred');
    toast('An unexpected error occurred');
    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};