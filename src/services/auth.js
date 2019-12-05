export const usuarioAutenticado = () => localStorage.getItem('usuario-token') !== null;
export const parseJwt = () => {
    var base64 = localStorage.getItem('usuario-token').split('.')[1];
    return JSON.parse(window.atob(base64)); // converte a base64 através do método atob para string e depois para json 
}