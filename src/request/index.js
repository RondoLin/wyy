import axios from 'axios'

let service  = axios.create({
    baseURL:'https://rondol.icu',
    timeout:8000
})

export default service