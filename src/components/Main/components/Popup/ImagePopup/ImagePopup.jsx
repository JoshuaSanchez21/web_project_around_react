export default function ImagePopup(props) {
  const { link, name } = props.card;
  return (
    <div className="popup__container_image">
      <img src={link} alt={name} className="popup__img" />
      <p className="popup__caption">{name}</p>
    </div>
  );
}
