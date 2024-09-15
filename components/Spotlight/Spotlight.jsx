import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import styles from "@/styles";
import spotlightStyles from "./spotlightStyles";

const Spotlight = ({ image, artist, isFavorite, onToggleFavorite }) => {
  return (
    <div style={spotlightStyles.container}>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      {image && (
        <Image
          src={image}
          width={400}
          height={400}
          alt={artist}
          priority
          style={spotlightStyles.image}
        />
      )}
      <p>
        Artist: <span>{artist}</span>
      </p>
    </div>
  );
};

export default Spotlight;
