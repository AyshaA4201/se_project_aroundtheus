export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add("modal_open");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("modal_open");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    // Close by X button or by clicking on overlay
    this._popup.addEventListener("mousedown", (evt) => {
      const clickedOnOverlay = evt.target.classList.contains("modal");
      const clickedOnClose = evt.target.classList.contains("modal__close");
      if (clickedOnOverlay || clickedOnClose) {
        this.close();
      }
    });
  }
}
