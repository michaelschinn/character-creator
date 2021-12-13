import Axios_Connect from './Axios_Connect';
export default function Login(props){

    let attemptLogin =  async (e) => {
        e.preventDefault();
        let response = await Axios_Connect(props.user, props.headers, 'login');
        console.log(response);
        props.setToken(response.access_token);
    }

    return(
        <button onClick={attemptLogin} name="login" type="submit">Login</button>
    )
}