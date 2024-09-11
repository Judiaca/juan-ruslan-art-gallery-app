import FavoriteIcon from "../../assets/heart.svg";

const FavoriteButton = ({ isFavorite, onToggleFavorite }) => {
  return (
    <button type="button" onClick={onToggleFavorite}>
      {isFavorite ? <span>Yes</span> : <span>NO</span>}
      <FavoriteIcon />
    </button>
  );
};

export default FavoriteButton;
