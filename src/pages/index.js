import Card from "../Components/Card.js";
import FormValidator from "../Components/FormValidator.js";
import PopupWithForm from "../Components/PopupWithForm.js";
import PopupWithImage from "../Components/PopupWithImage.js";
import Section from "../Components/Section.js";
import UserInfo from "../Components/UserInfo.js";

import {
  initialCards,
  validationSettings,
  selectors,
} from "../utils/constants.js";

// ----- User Info ----- //
const userInfo = new UserInfo({
  nameSelector: selectors.profileName,
  jobSelector: selectors.profileDesc,
});

// ----- Preview Image Popup ----- //
const imagePopup = new PopupWithImage(selectors.previewImagePopup);
imagePopup.setEventListeners();

// Card image click -> open preview popup
function handleCardClick({ name, link }) {
  imagePopup.open({ name, link });
}

// ----- Cards Section ----- //
const cardsSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#card-template", (link, name) => {
        // Normalize to object for image popup
        handleCardClick({ name, link });
      });
      const cardElement = card.getView();
      cardsSection.addItem(cardElement);
    },
  },
  selectors.cardsContainer
);

// Render initial cards once on page load
cardsSection.renderItems();

// ----- Validators ----- //
const editFormElement = document.querySelector(selectors.editForm);
const addCardFormElement = document.querySelector(selectors.addCardForm);

const editFormValidator = new FormValidator(
  validationSettings,
  editFormElement
);
const addFormValidator = new FormValidator(
  validationSettings,
  addCardFormElement
);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

// ----- Edit Profile PopupWithForm ----- //
const editProfilePopup = new PopupWithForm(
  selectors.editProfilePopup,
  (formValues) => {
    // Keys come from inputs' name attributes: "title" and "description"
    userInfo.setUserInfo({
      name: formValues.title,
      job: formValues.description,
    });
    // Close after successful submit
    editProfilePopup.close();
    // Optional: keep button state accurate (not strictly required for edit form)
    editFormValidator.toggleButtonState();
  }
);
editProfilePopup.setEventListeners();

// Open Edit Profile: prefill from UserInfo, reset validation, open
document
  .querySelector(selectors.editProfileBtn)
  .addEventListener("click", () => {
    const { name, job } = userInfo.getUserInfo();
    document.querySelector(selectors.nameInput).value = name;
    document.querySelector(selectors.descInput).value = job;
    editFormValidator.resetValidation(); // clears old errors & sets correct button state
    editProfilePopup.open();
  });

// ----- Add Card PopupWithForm ----- //
const addCardPopup = new PopupWithForm(selectors.addCardPopup, (formValues) => {
  const newItem = { name: formValues.title, link: formValues.link };

  // Create card and add to Section
  const card = new Card(newItem, "#card-template", (link, name) => {
    handleCardClick({ name, link });
  });
  const cardElement = card.getView();
  cardsSection.addItem(cardElement);

  // Close popup; form will reset in PopupWithForm.close()
  addCardPopup.close();

  // Start with disabled submit until user types again (meets checklist)
  addFormValidator.disableSubmit();
});
addCardPopup.setEventListeners();

// Open Add Card: reset validation and open
document.querySelector(selectors.addCardBtn).addEventListener("click", () => {
  addFormValidator.resetValidation();
  addCardPopup.open();
});
