import axios from 'axios';
export default function Axios_Connect(user, headers, func) {

    const axiosBaseURI = 'https://character-creator-backend-michaelstephenchinn186499.codeanyapp.com/';
    switch(func) {
        case 'register':
            break;

        case 'login':
            return axios.post(`${axiosBaseURI}oauth/token`, user, headers).then(Response => {
               
                sessionStorage.setItem('uAuth', Response.data.access_token);
                return Response.data;
            });

        case 'logout':
            
            return axios.get(`${axiosBaseURI}api/v1/logout`, user, headers).then(Response => {
                
                sessionStorage.removeItem('uAuth');
                return Response;
            });

        default:
            break;
    }
    
}