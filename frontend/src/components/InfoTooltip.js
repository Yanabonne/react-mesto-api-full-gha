import closeButton from "../images/close.svg";
import doneButton from "../images/done.svg";
import crossButton from "../images/cross.svg";

function InfoTooltip({
    isOpen,
    isRegistered,
    onClose
}) {
    return (
        <div
        className={`${isOpen ? "popup popup_opened" : "popup"}`}
      >
        <div className="popup__container">
          <button type="button" className="popup__close" onClick={onClose}>
            <img src={closeButton} className="popup__cross" alt="Крестик" />
          </button>
          <div className="form form_success">
          <img src={isRegistered ? doneButton : crossButton} className="popup__success" alt="Галочка" />
          <h2 className="form__title form__title_success">{isRegistered ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</h2>
          </div>
        </div>
      </div>
    );
  }
  
  export default InfoTooltip;