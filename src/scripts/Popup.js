export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscUp = this._handleEscUp.bind(this);
  }

  open() {
    // opens popup
  }

  close() {
    this._popupElement.classList.remove("popup_is-opened");
    document.removeEventListener("keyup", this._handleEscUp);
  }

  _handleEscClose() {
    // listens for esc button
  }

  setEventListeners() {
    // name explains it
  }
}
