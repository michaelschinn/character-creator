import Axios_Connect from './Axios_Connect';
import axios from 'axios';

export default function Logout(props){
    const axiosBaseURI = 'https://character-creator-backend-michaelstephenchinn186499.codeanyapp.com/';
    let attemptLogout = async () => {
        let headers = props.headers;
        headers['Authorization'] = `Bearer ${props.token}`;
        console.log(headers);
    //let response = await Axios_Connect(, headers, 'logout');
        console.log(axiosBaseURI);
        axios({
            url:`${axiosBaseURI}api/v1/logout`,
            method: "get",
            headers
        }).then(r => {
            console.log(r);    
            sessionStorage.removeItem('uAuth');
            props.setToken('');
        }).catch(e => console.log(e));

    }
    return(
        <>
            <button onClick={attemptLogout}>Logout</button>
        </>
    ) }