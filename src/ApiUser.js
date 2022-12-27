import axios from "axios";


export const registerUser  = async user => {
const response = await axios.post('https://connections-api.herokuapp.com/users/signup', user)
return response
}

export const loginUser  = async user => {
    const response = await axios.post('https://connections-api.herokuapp.com/users/login', user)
    return response
}

export const logoutUser = async user  => {
    const response = await axios.post('https://connections-api.herokuapp.com/users/logout', user)
    return response
}

export const refreshUser = async() =>{
    const response = await axios.get('https://connections-api.herokuapp.com/users/current')
    return response
}