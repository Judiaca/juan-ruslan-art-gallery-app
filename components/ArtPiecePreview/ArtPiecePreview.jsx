import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const ArtPiecePreview = ({
  slug,
  image,
  title,
  artist,
  artPiecesInfo,
  onToggleFavorite,
}) => {
  return (
    <article className="art-piece-preview">
      <FavoriteButton
        isFavorite={
          artPiecesInfo.find((piece) => piece.slug === slug)?.isFavorite
        }
        onToggleFavorite={() => onToggleFavorite(slug)}
      />
      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} alt={artist} width={300} height={300} priority />
        <h3>{title}</h3>
        <p>By: {artist}</p>
      </Link>
    </article>
  );
};

export default ArtPiecePreview;
