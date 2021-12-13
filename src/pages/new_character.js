
import Menu from '../components/Menu';
export default function NewCharacter(props){
    const menu = [
        {'name':'Generate', 'link':'/gen_character', 'description':'', 'enabled':'false'},
        {'name':'Manually Create', 'link':'/manually_create', 'description':'', 'enabled':'true'},
        {'name':'Back', 'link':'/character', 'description':'', 'enabled':'true'}
    ]
    return (
        
        <Menu menuList={menu}/>
    );
}