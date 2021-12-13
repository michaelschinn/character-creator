import {Link} from 'react-router-dom';
export default function New_Character(){
    return (
        <>
            <div className="signUp">
                <h1>SignUp</h1>
                <form id='signUpForm'>
                    <input name="username" type='text' placeholder='Username' />
                    <input name="password" type='password' placeholder='Password' />
                    <button>SignUp</button>
                </form>
            </div>
            <Link to="/"><button className="backButton">Back to Login</button></Link>
        </>
    );
}