import './Header.css'
import { HeaderMenu } from './HeaderMenu/HeaderMenu';

const Header = (props) => {
    return(
        <div className="header-container">
            <HeaderMenu />
        </div>
    );
}
export default Header;