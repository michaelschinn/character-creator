import Axios_Connect from './Axios_Connect';
export default function Login(props){

    let attemptLogin =  async (e) => {
        e.preventDefault();
        let access_token = await Axios_Connect(props, props.user, props.headers, 'login');
        //console.log(response);
               
        sessionStorage.setItem('uAuth', access_token);
        props.setToken(access_token);
    }

    return(
        <button onClick={attemptLogin} name="login" type="submit">Login</button>
    )
}