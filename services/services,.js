import axios from 'axios';

const baseURL = `http://localhost:5500/auth`

export const axiosGet = async (url) => {
    return await axios.get(`${baseURL}${url}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const axiosPost = async (url, data) => {
    return await axios.get(`${baseURL}${url}`, data,{
        headers: {
            "Content-Type": "application/json"
        }
    })
}