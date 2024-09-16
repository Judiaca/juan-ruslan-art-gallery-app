import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import styles from "./artPiecesStyles";
const { Title, ArtPiecesGrid } = styles;

const ArtPieces = ({ pieces, artPiecesInfo, onToggleFavorite }) => {
  return (
    <>
      <Title>Art Pieces Collection</Title>
      <ArtPiecesGrid>
        {pieces.map(({ slug, imageSource, name, artist }) => (
          <li key={slug}>
            <ArtPiecePreview
              slug={slug}
              image={imageSource}
              title={name}
              artist={artist}
              artPiecesInfo={artPiecesInfo}
              onToggleFavorite={onToggleFavorite}
            />
          </li>
        ))}
      </ArtPiecesGrid>
    </>
  );
};

export default ArtPieces;
