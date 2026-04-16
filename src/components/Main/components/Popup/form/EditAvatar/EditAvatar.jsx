import { useRef } from "react";

export default function EditAvatar({ onSubmit }) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      avatar: avatarRef.current.value,
    });
  }

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
            ref={avatarRef}
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
