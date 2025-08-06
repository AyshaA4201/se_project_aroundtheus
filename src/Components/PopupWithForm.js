import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const inputObject = {};

    this._formInputs.forEach((input) => {
      inputObject[input.name] = input.value;
    });

    return inputObject;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}

export default PopupWithForm;
