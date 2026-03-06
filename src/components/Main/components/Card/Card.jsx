import ImagePopup from "../Popup/ImagePopup/ImagePopup";
export default function Card({ card, handleOpenPopup }) {
  /* La export default function Card(props) {
   const {name, link, isLiked} = props.card;
   const {miNombre} = props.otraProp; 
  
  */
  const ImageComponent = {
    type: "image",
    children: <ImagePopup card={card} />,
  };

  const { name, link, isLiked } = card;
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
      ></button>
      <div className="main__gallery-content">
        <p className="main__gallery-paragraph">{name}</p>
        <button
          type="button"
          className="main__button main__button_like"
          aria-label="Me gusta"
        ></button>
      </div>
    </div>
  );
}
