import React from "react";

function Login({ onAuthorization }) {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  function handleAuthorization(e) {
    e.preventDefault();
    onAuthorization(passwordRef.current.value, emailRef.current.value);
  }
  return (
    <main className="content">
      <section className="sign-in">
        <form
          className="form form_white"
          name="login"
          onSubmit={handleAuthorization}
        >
          <h2 className="form__title form__title_white">Вход</h2>
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
            Войти
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
