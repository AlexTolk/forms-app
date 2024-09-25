import './HeaderMenu.css'
import { Link } from 'react-router-dom';

export const HeaderMenu = (props) => {
    return(
        <div className="header-menu-container">
            <nav className="header-menu-container__nav-menu">
                <Link to='/main'>Main</Link>
            </nav>
        </div>
    );
}