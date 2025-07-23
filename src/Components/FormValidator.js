class FormValidator {
  constructor(setting, formElement) {
    this._inputSelector = setting.inputSelector;
    this._submitButtonSelector = setting.submitButtonSelector;
    this._inactiveButtonClass = setting.inactiveButtonClass;
    this._inputErrorClass = setting.inputErrorClass;
    this._errorClass = setting.errorClass;
    this._form = formElement;
  }

  _showInputError(inputEl, errorClass) {
    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this._inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(this._errorClass);
  }

  _hideInputError(inputEl, errorClass) {
    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(this._inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputEl) {
    if (!inputEl.validity.valid) {
      this._showInputError(inputEl, inputEl.validationMessage);
    } else {
      this._hideInputError(inputEl, inputEl.validationMessage);
    }
  }

  _toggleButtonState() {
    let foundInvalid = this._inputEls.some(
      (inputEl) => !inputEl.validity.valid
    );
    let allEmpty = this._inputEls.every(
      (inputEl) => inputEl.value.trim() === ""
    );

    if (foundInvalid || allEmpty) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }

  _setEventListeners() {
    // const { this._inputSelector, this._submitButtonSelector } = options;
    this._inputEls = [...this._form.querySelectorAll(this._inputSelector)];
    this._submitButton = this._form.querySelector(this._submitButtonSelector);

    this._toggleButtonState();

    this._inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", () => {
        this._checkInputValidity(inputEl);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners(this._form);
  }
}

export default FormValidator;
