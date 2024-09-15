import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
// import styles from "@/styles";
import spotlightStyles from "./spotlightStyles";
import styled from "styled-components";

/* Added for trying to place the FavoriteButton */
const ImageContainer = styled.div`
  position: relative;
`;

const Spotlight = ({ image, artist, isFavorite, onToggleFavorite }) => {
  return (
    <div style={spotlightStyles.container}>
      {image && (
        <ImageContainer>
          <FavoriteButton
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
            style={spotlightStyles.favoriteButton}
          />
          <Image
            src={image}
            width={400}
            height={400}
            alt={artist}
            priority
            style={spotlightStyles.image}
          />
        </ImageContainer>
      )}
      <p style={spotlightStyles.artistText}>
        Artist: <span>{artist}</span>
      </p>
    </div>
  );
};

export default Spotlight;
