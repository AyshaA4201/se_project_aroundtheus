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
const previewModalCaption = document.querySelector("#image-caption");

const validationSettings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__save_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const editFormValidator = new FormValidator(
  validationSettings,
  profileFormElement
);
const addFormValidator = new FormValidator(
  validationSettings,
  addCardFormElement
);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

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
    const openedModal = document.querySelector(".modal_open");
    if (openedModal) {
      closeModal(openedModal);
    }
  }
}

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", handleOverlayClick);
});

function renderCard(cardData, wrapper) {
  const card = new Card(cardData, "#card-template", handlePreviewModal);
  const cardElement = card.getView();
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

function handlePreviewModal(link, name) {
  console.log(name);
  previewImage.src = link;
  previewImage.alt = name;
  previewModalCaption.textContent = name;
  openModal(previewImageModal);
}

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
