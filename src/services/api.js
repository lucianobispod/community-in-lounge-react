import Axios from 'axios';

export const api = Axios.create({
    baseURL: "http://localhost:5000/api" ,
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer " + localStorage.getItem("usuario-community")
    }
});


export const apiFormData = Axios.create({
    baseURL: "http://localhost:5000/api" ,
    headers: {
        "Authorization" : "Bearer" + localStorage.getItem("usuario-community")
    }
})