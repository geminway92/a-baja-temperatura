import axios from "axios"

const reserveApi = axios.create({
    baseURL: 'https://abajatemperatura-97bb7-default-rtdb.firebaseio.com/'
})

export default reserveApi