import Image from "next/image";
import Link from "next/link";
import ArtPiecePreviewContainer, {
  StyledFavoriteButton,
} from "./ArtPiecePreviewStyles";

const ArtPiecePreview = ({
  slug,
  image,
  artist,
  title,
  artPiecesInfo,
  onToggleFavorite,
}) => {
  const handleImageError = (event) => {
    event.target.src = "/path/to/placeholder-image.jpg"; // Replace with your placeholder image path
  };

  const isFavorite =
    artPiecesInfo.find((piece) => piece.slug === slug)?.isFavorite || false;

  return (
    <ArtPiecePreviewContainer>
      <StyledFavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={() => onToggleFavorite(slug)}
        data-isfavorite={isFavorite}
      />
      <Link href={`/art-pieces/${slug}`}>
        <figure>
          <Image
            src={image}
            alt={artist}
            width={300}
            height={300}
            priority
            onError={handleImageError}
          />
          <figcaption>
            <h3>{title}</h3>
            <p>By: {artist}</p>
          </figcaption>
        </figure>
      </Link>
    </ArtPiecePreviewContainer>
  );
};

export default ArtPiecePreview;
