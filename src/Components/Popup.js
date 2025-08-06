export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscUp = this._handleEscUp.bind(this);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup_is-opened");
    document.removeEventListener("keyup", this._handleEscUp);
  }

  _handleEscClose() {
    if (event.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (event) => {
      if (event.target === event.currentTarget) {
        this.close();
      }
    });

    this._closeButton.addEventListener("click", () => this.close());
  }
}
