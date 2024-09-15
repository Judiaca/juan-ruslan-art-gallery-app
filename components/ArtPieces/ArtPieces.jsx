import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import ArtPiecesGrid from "./artPiecesStyles";

const ArtPieces = ({ pieces, artPiecesInfo, onToggleFavorite }) => {
  return (
    <div>
      {/* <h2>Art Pieces Collection</h2> */}
      <ArtPiecesGrid>
        {" "}
        {/* Apply the styled component */}
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
    </div>
  );
};

export default ArtPieces;
