import Logout from '../components/Logout';
import Menu from '../components/Menu';

export default function Character(props){
    const menu = [
        {'name':'New Character', 'link':'/new_character', 'description':'', 'enabled':'true'},
        {'name':'My Characters', 'link':'/my_characters', 'description':'', 'enabled':'false'}
    ]

    return (
        <>
            <Menu menuList={menu} other={<Logout user={props.user} setToken={props.setToken} token={props.token} headers={props.headers} />} />
        </>
    );
}