import Card from "../Components/Card.js";
import FormValidator from "../Components/FormValidator.js";

const initialCards = [
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

const cardData = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

const card = new Card(cardData, "#card-template");
card.getView();

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

// Wrappers
const cardsWrap = document.querySelector(".cards__list");
const editProfileModal = document.querySelector("#edit-modal");
const addCardModal = document.querySelector("#card-add-modal");
const profileFormElement = editProfileModal.querySelector(".modal__form");
const addCardFormElement = addCardModal.querySelector(".modal__form");
const imageCaption = document.getElementById("image-caption");

// Buttons and other DOM nodes
const profileEditButton = document.querySelector(".profile__edit-button");
const profileModalCloseButton = editProfileModal.querySelector(".modal__close");
const addCardModalCloseButton = addCardModal.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const addNewCardButton = document.querySelector(".profile__add-button");

// Form data
const nameInput = profileFormElement.querySelector(".modal__input_type_title");
const descriptionInput = profileFormElement.querySelector(
  ".modal__input_type_description"
);
const cardTitleInput = addCardFormElement.querySelector(
  ".modal__input_type_title"
);
const cardUrlInput = addCardFormElement.querySelector(
  ".modal__input_type_link"
);

const previewImageModal = document.querySelector("#preview-image-modal");
const previewImage = previewImageModal.querySelector(".modal__image");
const imageCloseModalButton = previewImageModal.querySelector(".modal__close");

const validationSettings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__save_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const editFormElement = addCardFormElement.querySelector(".modal__form");
const addFormElement = addCardFormElement.querySelector(".modal__form");
const editFormValidator = new FormValidator(
  validationSettings,
  editFormElement
);
const addFormValidator = new FormValidator(validationSettings, addFormElement);

function closeModal(modal) {
  modal.classList.remove("modal_open");
  document.removeEventListener("keydown", handleEscKey);
}

function openModal(modal) {
  modal.classList.add("modal_open");
  document.addEventListener("keydown", handleEscKey);
}

function handleOverlayClick(event) {
  if (event.target.classList.contains("modal")) {
    closeModal(event.target);
  }
}

function handleEscKey(event) {
  if (event.key === "Escape") {
    const openModal = document.querySelector(".modal_open");
    if (openModal) {
      closeModal(openModal);
    }
  }
}

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", handleOverlayClick);
});

function renderCard(cardData, wrapper) {
  const cardElement = new Card(cardData);
  wrapper.prepend(cardElement);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(editProfileModal);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardsWrap);
  closeModal(addCardModal);
  addCardFormElement.reset();
}

// _getCardElement() {
//   this._cardElement = cardTemplate.cloneNode(true);
//   this._cardImage = cardElement.querySelector(".card__image");
//   this._cardTitle = cardElement.querySelector(".card__title");
//   this._likeButton = cardElement.querySelector(".card__like-button");
//   this._deleteButton = cardElement.querySelector(".card__delete-button");

//   deleteButton.addEventListener("click", () => {
//     cardElement.remove();
//   });

//   cardImage.addEventListener("click", () => {
//     previewImage.src = data.link;
//     previewImage.alt = data.name;
//     imageCaption.textContent = data.name;
//     openModal(previewImageModal);
//   });

//   likeButton.addEventListener("click", () => {
//     likeButton.classList.toggle("card__like-button_active");
//   });

//   cardImage.src = data.link;
//   cardImage.alt = data.name;
//   cardTitle.textContent = data.name;

//   return cardElement;
// }

// Form listeners
profileFormElement.addEventListener("submit", handleProfileFormSubmit);
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

profileEditButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
  openModal(editProfileModal);
});

profileModalCloseButton.addEventListener("click", () =>
  closeModal(editProfileModal)
);

addNewCardButton.addEventListener("click", () => openModal(addCardModal));
addCardModalCloseButton.addEventListener("click", () =>
  closeModal(addCardModal)
);

imageCloseModalButton.addEventListener("click", () =>
  closeModal(previewImageModal)
);

initialCards.forEach((cardData) => renderCard(cardData, cardsWrap));
