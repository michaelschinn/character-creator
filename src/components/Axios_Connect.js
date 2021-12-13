import axios from 'axios';
export default function Axios_Connect(props, user, headers, func) {

    const axiosBaseURI = 'https://character-creator-backend-michaelstephenchinn186499.codeanyapp.com/';
    switch(func) {
        case 'register':
            break;

        case 'login':
            return axios.post(`${axiosBaseURI}oauth/token`, user, headers).then(Response => {
                //console.log(Response);
                return Response.data.access_token;
            });

        case 'logout':
            return axios({
                url:`${axiosBaseURI}api/v1/logout`,
                method: "get",
                headers
            }).then(r => {
                //console.log(r);    
                sessionStorage.removeItem('uAuth');
                props.setToken('');
                return r;
            }).catch(e => {
                console.log(e);
            });

        default:
            break;
    }
    
}