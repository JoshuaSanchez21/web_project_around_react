export default function Popup(props) {
  const { onClose, title, children, type } = props;
  return (
    <>
      {type === "image" ? (
        <div className="popup popup_image">
          <div className="popup__container popup__container_image">
            <button
              type="button"
              className="popup__button popup__button_close"
              aria-label="Close Modal"
              onClick={onClose}
            >
              X
            </button>
            {children}
          </div>
        </div>
      ) : (
        <div className="popup">
          <form className="popup__container" name="form" noValidate>
            <button
              type="button"
              className="popup__button popup__button_close"
              aria-label="Close Modal"
              onClick={onClose}
            >
              X
            </button>
            {title && <h3 className="popup__subtitle">{title}</h3>}
            {children}
          </form>
        </div>
      )}
    </>
  );
}
