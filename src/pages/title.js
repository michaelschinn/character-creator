import {Link} from 'react-router-dom';
import Login from '../components/Login';

export default function Title(props){
    return (
        <>
            <div className="login">
                <h1>Login</h1>
                <form id='loginForm'>
                    <input name="username" type='text' placeholder='username' />
                    <input name="password" type='password' placeholder='password' />
                    <Login user={props.user} headers={props.headers} setToken={props.setToken} />
                </form>
                <p>Don't have an account yet? <Link to='signup'>Click here to SignUp</Link></p>
            </div>
            <button className="backButton">Back to Portfolio</button>
        </>
    );
}