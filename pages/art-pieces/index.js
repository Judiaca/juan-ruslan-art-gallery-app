import ArtPieces from "@/components/ArtPieces/ArtPieces";
import Section from "@/components/Section/Section";

const ArtPiecesPage = ({ artPieces, artPiecesInfo, onToggleFavorite }) => {
  return (
    <Section>
      <ArtPieces
        pieces={artPieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </Section>
  );
};

export default ArtPiecesPage;
