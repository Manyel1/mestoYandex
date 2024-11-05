import { openPopup, closePopup } from "./components/modal.js";
import { createCard } from "./components/card.js";
import { initialCards } from "./components/cards.js";
import { animatedPopup } from "./components/modal.js";
import "./styles/index.css";

const cardTemplate = document.querySelector("#card-template");
const placesList = document.querySelector(".places__list");
const editProfile = document.querySelector(".profile__edit-button");
const profilePopup = document.querySelector(".popup_type_edit");
const createNewCardButton = document.querySelector(".profile__add-button");
const newCardPopup = document.querySelector(".popup_type_new-card");
const popups = document.querySelectorAll(".popup");
const popupCardImage = document.querySelector(".popup_type_image");
const editProfileForm = profilePopup.querySelector('[name="edit-profile"]');
const nameInput = editProfileForm.querySelector('[name="name"]');
const jobInput = editProfileForm.querySelector('[name="description"]');
const formImage = newCardPopup.querySelector('[name="new-place"]');
const nameImage = formImage.querySelector('[name="place-name"]');
const InputImageUrl = formImage.querySelector('[name="link"]');

function cardImageHandler({ name, link }) {
  const popupImageCaption = popupCardImage.querySelector(".popup__caption");
  const popupImage = popupCardImage.querySelector(".popup__image");

  popupImageCaption.textContent = name;

  popupImage.setAttribute("src", link);
  popupImage.setAttribute("alt", name);

  openPopup(popupCardImage);
}

editProfile.addEventListener("click", () => openPopup(profilePopup));
createNewCardButton.addEventListener("click", () => openPopup(newCardPopup));

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => popups.forEach((popup) => animatedPopup(popup)), 10);
});

popups.forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
      closePopup(popup);
    }
  });
  const closePopupButton = popup.querySelector(".popup__close");
  closePopupButton.addEventListener("click", () => closePopup(popup));
});

function renderCards(data) {
  data.forEach((element) => {
    placesList.prepend(createCard(cardTemplate, cardImageHandler, element));
  });
}

renderCards(initialCards);

function handleFormSubmit(evt) {
  evt.preventDefault();

  const nameInputValue = nameInput.value;
  const jobInputValue = jobInput.value;

  const profileTitle = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");

  profileTitle.textContent = nameInputValue;
  profileDescription.textContent = jobInputValue;

  closePopup(profilePopup);
}

editProfileForm.addEventListener("submit", handleFormSubmit);

function ImageFormSubmit(evt) {
  evt.preventDefault();

  const nameImageValue = nameImage.value;
  const ImageUrlValue = InputImageUrl.value;

  const NewCard = createCard(cardTemplate, cardImageHandler, {
    name: nameImageValue,
    link: ImageUrlValue,
  });

  placesList.prepend(NewCard);
  closePopup(newCardPopup);
}

formImage.addEventListener("submit", ImageFormSubmit);
