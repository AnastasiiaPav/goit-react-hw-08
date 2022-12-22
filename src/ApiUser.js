import axios from "axios";

export const registerUser  = async user => {
const response = await axios.post('users/singup', user)
return response
}

export const loginUser  = async user => {
    const response = await axios.post('users/login', user)
    return response
}

export const logoutUser = async user => {
    const response = await axios.post('users/logout', user)
    return response
}

export const refreshUser = async() =>{
    const response = await axios.get('users/current')
    return response
}