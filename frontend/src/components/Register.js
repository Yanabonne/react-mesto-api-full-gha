import React from "react";

function Register({ linkToLogin, onRegistration }) {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  function handleRegistration(e) {
    e.preventDefault();
    onRegistration(passwordRef.current.value, emailRef.current.value);
  }

  return (
    <main className="content">
      <section className="sign-in">
        <form
          className="form form_white"
          name="login"
          onSubmit={handleRegistration}
        >
          <h2 className="form__title form__title_white">Регистрация</h2>
          <input
            type="email"
            className="form__text form__text_white"
            name="email"
            placeholder="Email"
            required
            ref={emailRef}
          />
          <span className="form__input-error"></span>
          <input
            type="password"
            className="form__text form__text_white"
            name="password"
            placeholder="Пароль"
            required
            ref={passwordRef}
          />
          <span className="form__input-error"></span>
          <button type="submit" className="form__submit form__submit_white">
            Зарегистрироваться
          </button>
        </form>
        <p className="sign-in__text" onClick={linkToLogin}>
          Уже зарегистрированы? Войти
        </p>
      </section>
    </main>
  );
}

export default Register;
