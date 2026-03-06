import profile from "../../../images/profile.png";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/form/NewCard/NewCard";
import EditProfile from "./components/Popup/form/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/form/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";

import { useState } from "react";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard />,
  };
  const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile />,
  };

  const editAvatarPopup = {
    title: "Editar Avatar",
    children: <EditAvatar />,
  };

  /*const imagePopup = {
    children: <ImagePopup />,
  };*/

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <div className="page">
      <main className="main">
        <section className="main__profile">
          <div className="main__profile-image">
            <img
              className="main__profile-photo"
              alt="Profile photo"
              src={profile}
            />

            {/*Botón de editar avatar (se muestra en hover)*/}
            <button
              type="button"
              className="main__button main__button_edit-avatar"
              aria-label="Editar foto de perfil"
              onClick={() => handleOpenPopup(editAvatarPopup)}
            >
              🖌
            </button>
          </div>
          <div className="main__profile-description">
            <p className="main__paragraph main__paragraph_name">
              Joshua Sánchez
            </p>
            <p className="main__paragraph main__paragraph_role">Estudiante</p>
            <button
              type="button"
              className="main__button main__button_edit"
              aria-label="Editar perfil"
              onClick={() => handleOpenPopup(editProfilePopup)}
            >
              🖌
            </button>
          </div>
          <button
            type="button"
            className="main__button main__button_add"
            aria-label="Añadir foto"
            onClick={() => handleOpenPopup(newCardPopup)}
          >
            🞣
          </button>
        </section>

        <section className="main__gallery">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              handleOpenPopup={handleOpenPopup}
            />
            //<Card key={card._id} name={card.name} link={card.link} isLiked={card.isLiked} otraProp={"Joshua"} />
          ))}
        </section>

        {popup && (
          <Popup
            onClose={handleClosePopup}
            title={popup.title}
            type={popup.type}
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
