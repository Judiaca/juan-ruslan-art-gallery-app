import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BackButton from "@/components/BackButton/BackButton";

const ArtPieceDetailsPage = ({
  artPieces,
  artPiecesInfo,
  onToggleFavorite,
  onSubmitComment,
}) => {
  const router = useRouter();
  const { slug } = router.query;
  const [piece, setPiece] = useState(null);

  useEffect(() => {
    setPiece(artPieces.find((piece) => piece.slug === slug));
  }, [artPieces, setPiece, slug]);

  if (!piece) {
    return null;
  }

  const { imageSource, name, artist, year, genre, colors } = piece;

  return (
    <>
      <BackButton />
      <ArtPieceDetails
        slug={slug}
        image={imageSource}
        title={name}
        artist={artist}
        year={year}
        genre={genre}
        colors={colors}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={() => onToggleFavorite(slug)}
        onSubmitComment={onSubmitComment}
      />
    </>
  );
};

export default ArtPieceDetailsPage;
