import './header-style.scss';

import list from '../../gallery/list.png';
import user from '../../gallery/user.png';

const Header = () => {
    return(
        <div className="header-container">
            <div className="header">
                <h1>IT Logger | The perfect management system for tech issues</h1>
                <div id="links">
                    <a className='size14' href="/"> <img src={list} alt=""/> Logs </a>
                    <a className='size14' href="/users"> <img src={user} alt=""/> Users </a>
                </div>
            </div>
        </div>
    )
}

export default Header;