import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const Spotlight = ({ image, artist, isFavorite, onToggleFavorite }) => {
  return (
    <div>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      {image && (
        <Image src={image} width={400} height={400} alt={artist} priority />
      )}
      <p>
        Artist: <span>{artist}</span>
      </p>
    </div>
  );
};

export default Spotlight;
