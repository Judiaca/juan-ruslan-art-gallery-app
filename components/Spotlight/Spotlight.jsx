import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import styles from "./spotlightStyles";

const { Hero, ArtistInfo } = styles;

const Spotlight = ({ image, artist, isFavorite, onToggleFavorite }) => {
  return (
    <Hero>
      {image && (
        <Image src={image} width={400} height={400} alt={artist} priority />
      )}
      <ArtistInfo>
        <p>
          Artist: <span>{artist}</span>
        </p>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      </ArtistInfo>
    </Hero>
  );
};

export default Spotlight;
