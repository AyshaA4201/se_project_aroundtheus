export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        //this._handlePreviewPicture();
        this._renderCard;
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
    // console.log(this._handleDeleteCard);
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  // _handlePreviewPicture() {
  //   this._previewImageModal = document.querySelector("#preview-image-modal");
  //   this._previewImage = this._previewImageModal.querySelector(
  //     "#preview-image-modal__image"
  //   );
  //   this._imageCaption =
  //     this._previewImageModal.querySelector("#image-caption");
  //   this._previewImage.src = this._link;
  //   this._previewImage.alt = this._name;
  //   this._imageCaption.textContent = this._name;

  //   this._openModal(this._previewImageModal);
  // }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    //get card view, set event listeners, and return the card element
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
