import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const ArtPieceDetails = ({
  slug,
  image,
  title,
  artist,
  year,
  genre,
  colors,
  artPiecesInfo,
  onToggleFavorite,
}) => {
  return (
    <article>
      <FavoriteButton
        isFavorite={
          artPiecesInfo.find((piece) => piece.slug === slug)?.isFavorite
        }
        onToggleFavorite={onToggleFavorite}
      />
      <h1>{title}</h1>
      <Image src={image} width={400} height={400} alt={artist} />
      <p>
        Artist: <span>{artist}</span>
      </p>
      <p>
        Year: <span>{year}</span>
      </p>
      <p>
        Genre: <span>{genre}</span>
      </p>
      <ul>
        {colors.map((color) => {
          return <li key={color}>{color}</li>;
        })}
      </ul>
    </article>
  );
};

export default ArtPieceDetails;
