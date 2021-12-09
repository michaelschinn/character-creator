import axios from 'axios';
export default function Axios_Connect(props, func){
    const axiosBaseURI = 'https://port-8000-laravel-michaelstephenchinn186499.preview.codeanywhere.com/';
    switch(func){
        case 'register':
            break;

        case 'login':
            axios.post(`${axiosBaseURI}oauth/token`, props.user, props.headers).then(Response => {
                let response = Response;
                return response;
            });
            break;

        case 'logout':
            break;

        default:
            break;
    }
}