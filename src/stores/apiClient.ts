import axios from 'axios'

const apiClient = axios.create({
    // baseURL: process.env.REACT_APP_MAIN_API_BASE_URL,
    timeout: 150000
})





export default apiClient;