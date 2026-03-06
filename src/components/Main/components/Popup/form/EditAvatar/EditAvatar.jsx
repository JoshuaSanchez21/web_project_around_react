export default function EditAvatar() {
  return (
    <>
      <fieldset className="popup__content">
        <label className="popup__field">
          <input
            type="url"
            id="avatar-link"
            name="avatar"
            className="popup__input popup__input_link"
            placeholder="https://"
            required
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
