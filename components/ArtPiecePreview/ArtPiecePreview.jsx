import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import styles from "./ArtPiecePreviewStyles";

const { Article, Info } = styles;

const ArtPiecePreview = ({
  slug,
  image,
  artist,
  title,
  artPiecesInfo,
  onToggleFavorite,
}) => {
  const isFavorite =
    artPiecesInfo.find((piece) => piece.slug === slug)?.isFavorite || false;

  return (
    <Article>
      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} alt={artist} width={300} height={300} priority />
      </Link>
      <Info>
        <h3>{title}</h3>
        <p>
          By: <span>{artist}</span>
        </p>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={() => onToggleFavorite(slug)}
          data-isfavorite={isFavorite}
        />
      </Info>
    </Article>
  );
};

export default ArtPiecePreview;
