import { Link } from 'react-router-dom';
import Logout from '../components/Logout';

export default function Character(props){
    return (
        <>
            <Link to='/new_character'><button>New Character</button></Link>
            <Link to='/my_characters'><button>My Characters</button></Link>
            <Logout user={props.user} setToken={props.setToken} token={props.token} headers={props.headers} />
        </>
    );
}