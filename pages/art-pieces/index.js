import ArtPieces from "@/components/ArtPieces/ArtPieces";

const ArtPiecesPage = ({ artPieces, artPiecesInfo, onToggleFavorite }) => {
  return (
    <ArtPieces
      pieces={artPieces}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
    />
  );
};

export default ArtPiecesPage;
