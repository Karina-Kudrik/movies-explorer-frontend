import './Header.css';
import logo from '../../images/logo.svg';

function Header() {
   return (
      <header className='header'>
         <div className='header__container'>
            <img className='header__logo' src={logo} alt="Лого"/>
            <ul className='header__navigation'>
               <li className='header__link header__link_signup'>Регистрация</li>
               <li className='header__link header__link_signin'>Войти</li>
            </ul>
         </div>
      </header>
   );
}

export default Header;