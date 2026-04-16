import { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";
import ImagePopup from "../Popup/ImagePopup/ImagePopup";

export default function Card({
  card,
  handleOpenPopup,
  onCardLike,
  onCardDelete,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const { name, link, isLiked } = card;
  const cardLikeButtonClassName = `main__button main__button_like ${
    isLiked ? "main__button_like_active" : ""
  }`;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClicked() {
    onCardDelete(card);
  }

  const ImageComponent = {
    type: "image",
    children: <ImagePopup card={card} />,
  };

  return (
    <div className="main__gallery-card">
      <img
        src={link}
        alt={name}
        className="main__gallery-image"
        onClick={() => {
          handleOpenPopup(ImageComponent);
        }}
      />
      <button
        type="button"
        className="main__button main__button_trash"
        aria-label="Eliminar"
        onClick={handleDeleteClicked}
      ></button>
      <div className="main__gallery-content">
        <p className="main__gallery-paragraph">{name}</p>
        <button
          type="button"
          className={cardLikeButtonClassName}
          aria-label="Me gusta"
          onClick={handleLikeClick}
        ></button>
      </div>
    </div>
  );
}
