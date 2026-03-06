export default function NewCard() {
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
        />
        <span className="error-message"></span>
        <input
          id="card-link"
          type="url"
          name="link"
          className="popup__input popup__input_link"
          placeholder="https://"
          required
        />
        <span className="error-message"></span>
      </fieldset>
      <fieldset className="popup__content">
        <button
          type="submit"
          className="popup__button popup__button_save"
          disabled
        >
          Guardar
        </button>
      </fieldset>
    </>
  );
}
