export function createCard(cardTemplate, cardImageHandler, { name, link }) {
  const card = cardTemplate.content.cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const cardLikeButton = card.querySelector(".card__like-button");
  const cardDeleteButton = card.querySelector(".card__delete-button");

  cardTitle.textContent = name;

  cardImage.setAttribute("src", link);
  cardImage.setAttribute("alt", name);

  cardLikeButton.addEventListener("click", function (event) {
    event.currentTarget.classList.toggle("card__like-button_is-active");
  });


  cardDeleteButton.addEventListener("click", removeCard);

  card.querySelector(".card__image").addEventListener("click",() => cardImageHandler({name,link}))

  

  return card;
}

export function removeCard(event) {
  const card = event.currentTarget.closest(".card");
  card.remove();
}



