import { useState } from "react";

export default function NewCard({ onSubmit }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      name,
      link,
    });
  }

  return (
    <>
      <fieldset className="popup__content">
        <input
          id="card-name"
          type="text"
          name="title"
          className="popup__input popup__input_name"
          placeholder="Nombre"
          required
          minLength="1"
          maxLength="30"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="error-message"></span>
        <input
          id="card-link"
          type="url"
          name="link"
          className="popup__input popup__input_link"
          placeholder="https://"
          required
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <span className="error-message"></span>
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
