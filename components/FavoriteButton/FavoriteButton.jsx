// import FavoriteIcon from "../../assets/heart.svg";
// import FavoriteButtonContainer from "./favoriteButtonStyles";

// const FavoriteButton = ({ isFavorite, onToggleFavorite }) => {
//   return (
//     <button type="button" onClick={onToggleFavorite}>
//       {isFavorite ? <span>Yes</span> : <span>NO</span>}
//       <FavoriteIcon />
//     </button>
//   );
// };

// export default FavoriteButton;

import HeartIcon from "../../assets/heart.svg";
import HeartTransparentIcon from "../../assets/heart-transparent.svg";
import FavoriteButtonContainer from "./favoriteButtonStyles";

const FavoriteButton = ({ isFavorite, onToggleFavorite }) => {
  return (
    <FavoriteButtonContainer type="button" onClick={onToggleFavorite}>
      {isFavorite ? <HeartIcon /> : <HeartTransparentIcon />}
    </FavoriteButtonContainer>
  );
};

export default FavoriteButton;
