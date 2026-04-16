import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext";

export default function EditProfile({ onSubmit }) {
  const { currentUser } = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser?.name || "");
      setDescription(currentUser?.about || "");
    }
  }, [currentUser]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name: name, about: description });
  };
  return (
    <>
      <fieldset className="popup__content">
        <label className="popup__field">
          <input
            id="profile-name"
            type="text"
            name="name"
            className="popup__input popup__input_name"
            placeholder="Nombre"
            required
            minLength="2"
            value={name}
            onChange={handleNameChange}
          />
          <span className="error-message"></span>
        </label>
        <label className="popup__field">
          <input
            id="profile-link"
            type="text"
            name="about"
            className="popup__input popup__input_about"
            placeholder="Acerca de mí"
            required
            minLength="2"
            value={description}
            onChange={handleDescriptionChange}
          />
          <span className="error-message"></span>
        </label>
      </fieldset>
      <fieldset className="popup__content">
        <button
          type="submit"
          className="popup__button popup__button_save"
          onClick={handleSubmit}
        >
          Guardar
        </button>
      </fieldset>
    </>
  );
}
