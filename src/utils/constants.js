export const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

export const validationSettings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__save_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

// Selectors used in index.js
export const selectors = {
  cardsContainer: ".cards__list",

  // Modals
  editProfilePopup: "#edit-modal",
  addCardPopup: "#card-add-modal",
  previewImagePopup: "#preview-image-modal",

  // Profile
  profileName: ".profile__title",
  profileDesc: ".profile__description",

  // Buttons
  editProfileBtn: ".profile__edit-button",
  addCardBtn: ".profile__add-button",

  // Form fields
  editForm: "#edit-modal .modal__form",
  addCardForm: "#card-add-modal .modal__form",
  nameInput: "#edit-modal .modal__input_type_title",
  descInput: "#edit-modal .modal__input_type_description",
  cardTitleInput: "#card-add-modal .modal__input_type_title",
  cardLinkInput: "#card-add-modal .modal__input_type_link",

  // Preview content
  previewImageEl: "#preview-image-modal .modal__image",
  previewCaptionEl: "#image-caption",
};
