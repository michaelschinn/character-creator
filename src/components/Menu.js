import {Link} from 'react-router-dom';
export default function Menu(props){
    const menuList = () => (
        props.menuList.map(obj => {
            if(obj.enabled==='true'){
                return (   
                    <div key={obj.name} className='menuItem'><Link to={obj.link}>{obj.name}</Link></div>
                )
            } else {
                return (   
                    <div key={obj.name} className='menuItem disabled'>{obj.name}</div>
                )
            }
        })
    );
    return(
        <div className="menu">
            {menuList()}
            {props.other}
        </div>
    );
}