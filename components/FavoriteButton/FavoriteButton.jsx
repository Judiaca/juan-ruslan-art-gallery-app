import HeartIcon from "../../assets/heart.svg";
import HeartTransparentIcon from "../../assets/heart-transparent.svg";
import FavoritBtn from "./favoriteButtonStyles";

const FavoriteButton = ({ isFavorite, onToggleFavorite }) => {
  return (
    <FavoritBtn type="button" onClick={onToggleFavorite}>
      {isFavorite ? <HeartIcon /> : <HeartTransparentIcon />}
    </FavoritBtn>
  );
};

export default FavoriteButton;
