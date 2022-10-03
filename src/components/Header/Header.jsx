import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({login, loggedIn}) {
   const location = useLocation();
   return (
      <header className={`header ${location.pathname === '/' ? '' : 'header_dark'}`}>
         <div className="header__container">
            <Link to='/' className="header__link">
               <img className="header__logo" src={logo} alt="Лого"/>
            </Link>
            <Navigation
               loggedIn={loggedIn}
               login={login}
            />
         </div>
      </header>
   );
}

export default Header;