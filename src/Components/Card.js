export default class Card {
  constructor({ name, link }, cardSelector, handlePreviewPicture) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handlePreviewPicture = handlePreviewPicture;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        // current signature:
        this._handlePreviewPicture(this._link, this._name);
      });

    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });

    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._deleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardTitle = this._cardElement.querySelector(".card__title");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    this._setEventListeners();
    return this._cardElement;
  }
}
