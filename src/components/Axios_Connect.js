import axios from 'axios';
export default function Axios_Connect(props, func){
    const axiosBaseURI = 'https://character-creator-backend-michaelstephenchinn186499.codeanyapp.com/';
    switch(func){
        case 'register':
            break;

        case 'login':
            axios.post(`${axiosBaseURI}oauth/token`, props.user, props.headers).then(Response => {
                console.log(Response);
                return Response;
            });
            break;

        case 'logout':
            break;

        default:
            break;
    }
}