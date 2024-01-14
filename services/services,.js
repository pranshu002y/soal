import axios from 'axios';

const baseURL = `https://scoutverse.onrender.com/`

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