export default function EditProfile() {
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
          />
          <span className="error-message"></span>
        </label>
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
