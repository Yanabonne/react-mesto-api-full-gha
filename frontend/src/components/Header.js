import React from "react";
import burger from '../images/burger.svg';
import logo from '../images/logo_white.svg';
import closeButton from "../images/close.svg";

function Header({loginText, userEmail, isLoggedIn, linkToLogin, linkToRegister, onLogOut}) {
  const [burgerImage, setBurgerImage] = React.useState(burger);
  const userInfoRef = React.useRef();

  function handleLoginClick() {
    if (loginText === 'Регистрация') {
      linkToRegister()
    } else if (loginText === 'Войти') {
      linkToLogin();
    }else if (loginText === 'Выйти') {
      onLogOut();
      setBurgerImage(burger);
    }
  }

  function handleBurgerClick() {
    burgerImage === burger ? setBurgerImage(closeButton) : setBurgerImage(burger);
    userInfoRef.current.classList.toggle('header__auth_opened');
  }

  return (
    <header className={`${isLoggedIn ? "header header_logged-in" : "header"}`}>
        <div className='header__logos'>
        <img
          className="header__logo"
          src={logo}
          alt="Логотип"
        />
        <img
          className={`${isLoggedIn ? "header__burger" : "header__burger_no-display"}`}
          src={burgerImage}
          alt="Бургер"
          onClick={handleBurgerClick}
        />
        </div>
        <div className={`${isLoggedIn ? "header__auth header__auth_logged-in" : "header__auth"}`} ref={userInfoRef} >
          <p className='header__email'>{userEmail}</p>
          <p className={`${isLoggedIn ? "header__login header__login_grey" : "header__login"}`} onClick={handleLoginClick} >{loginText}</p>
        </div>
    </header>
  );
}

export default Header;