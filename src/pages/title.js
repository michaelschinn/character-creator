import {Link} from 'react-router-dom';
import Login from '../components/Login';

export default function Title(){
    return (
        <>
            <h1>Character Creator</h1>
            <Login />
            <p>Don't have an account yet? Click here to <Link to='signup'>SignUp</Link></p>
            <button>Back to Portfolio</button>
        </>
    );
}