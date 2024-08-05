import axios from "./axios";

export const login = (payload) => {
    axios.post('/auth/login', payload)
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        });
}