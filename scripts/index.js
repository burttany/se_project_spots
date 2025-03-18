const profileEditButton = document.querySelector(".profile__edit-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const editProfileModal = document.querySelector("#edit-profile-modal");
const editModalCloseBtn = document.querySelector(".modal__close-btn");
const profileFormElement = document.querySelector(".modal__form");
const editProfileModalNameInput = document.querySelector("#profile-name-input");
const editProfileModalDescriptionInput = document.querySelector(
  "#profile-description-input"
);

function openModal() {
  editProfileModalNameInput.value = profileName.textContent;
  editProfileModalDescriptionInput.value = profileDescription.textContent;
  editProfileModal.classList.add("modal_opened");
}

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");

  cardNameEl.textContent = data.name;
  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;

  return cardElement;
}

function closeModal() {
  editProfileModal.classList.remove("modal_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editProfileModalNameInput.value;
  profileDescription.textContent = editProfileModalDescriptionInput.value;
  closeModal();
}

profileEditButton.addEventListener("click", openModal);
editModalCloseBtn.addEventListener("click", closeModal);
profileFormElement.addEventListener("submit", handleProfileFormSubmit);

for (let i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards[i]);
  cardsList.prepend(cardElement);
}
