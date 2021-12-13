import Axios_Connect from './Axios_Connect';

export default function Logout(props){
    let attemptLogout = async () => {
        let headers = props.headers;
        headers['Authorization'] = `Bearer ${props.token}`;
        Axios_Connect(props, props.user, headers, 'logout');

    }
    return(
        <>
            <button onClick={attemptLogout}>Logout</button>
        </>
    ) }