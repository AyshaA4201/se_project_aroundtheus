import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector); // <-- pass string selector directly
    this._handleFormSubmit = handleFormSubmit;

    // Cache the form and inputs inside this popup
    this._popupForm = this._popup.querySelector(".modal__form");
    this._inputList = Array.from(
      this._popupForm.querySelectorAll(".modal__input")
    );
  }

  _getInputValues() {
    const values = {};
    this._inputList.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    // Reset the form so fields/buttons are fresh next open
    this._popupForm.reset();
    super.close();
  }
}
