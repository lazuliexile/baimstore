import axios from "./axios";

export const login = async (payload) => {
    return axios.post('/auth/login', payload)
        .then(function (response) {
            return {status:true, response};
        })
        .catch(function (error) {
            return {status:false, response:error}
        });
}

export const register = (payload) => {

}