import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/form/NewCard/NewCard";
import EditProfile from "./components/Popup/form/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/form/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";
import api from "../../utils/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import { useState, useEffect, useContext } from "react";

function Main({
  popup,
  onOpenPopup,
  onClosePopup,
  cards,
  onCardLike,
  onCardDelete,
  onAddPlaceSubmit,
}) {
  const { currentUser, handleUpdateUser, handleUpdateAvatar } =
    useContext(CurrentUserContext);

  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard onSubmit={onAddPlaceSubmit} />,
  };
  const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile onSubmit={handleUpdateUser} />,
  };

  const editAvatarPopup = {
    title: "Editar Avatar",
    children: <EditAvatar onSubmit={handleUpdateAvatar} />,
  };

  return (
    <div className="page">
      <main className="main">
        <section className="main__profile">
          <div className="main__profile-image">
            <img
              className="main__profile-photo"
              alt="Profile photo"
              src={currentUser?.avatar}
            />

            {/*Botón de editar avatar (se muestra en hover)*/}
            <button
              type="button"
              className="main__button main__button_edit-avatar"
              aria-label="Editar foto de perfil"
              onClick={() => onOpenPopup(editAvatarPopup)}
            >
              🖌
            </button>
          </div>
          <div className="main__profile-description">
            <p className="main__paragraph main__paragraph_name">
              {currentUser?.name}
            </p>
            <p className="main__paragraph main__paragraph_role">
              {currentUser?.about}
            </p>
            <button
              type="button"
              className="main__button main__button_edit"
              aria-label="Editar perfil"
              onClick={() => onOpenPopup(editProfilePopup)}
            >
              🖌
            </button>
          </div>
          <button
            type="button"
            className="main__button main__button_add"
            aria-label="Añadir foto"
            onClick={() => onOpenPopup(newCardPopup)}
          >
            🞣
          </button>
        </section>

        <section className="main__gallery">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              handleOpenPopup={onOpenPopup}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
            //<Card key={card._id} name={card.name} link={card.link} isLiked={card.isLiked} otraProp={"Joshua"} />
          ))}
        </section>

        {popup && (
          <Popup
            onClose={onClosePopup}
            title={popup.title}
            type={popup.type}
            onSubmit={popup.onSubmit}
          >
            {console.log(popup.type)}
            {popup.children}
          </Popup>
        )}
      </main>
    </div>
  );
}

export default Main;
