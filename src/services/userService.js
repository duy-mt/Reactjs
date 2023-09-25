import axios from '../axios';

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', {email: email, password: password})
                // .then(response => {
                // console.log('Response:', response.data);
                // })
                // .catch(error => {
                // console.error('Error:', error);
                // });
}
export { handleLoginApi }

