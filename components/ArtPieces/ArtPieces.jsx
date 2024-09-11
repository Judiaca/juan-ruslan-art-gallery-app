import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

const ArtPieces = ({ pieces, artPiecesInfo, onToggleFavorite }) => {
  return (
    <div>
      <h2>Art Pieces Collection</h2>
      <ul className="art-pieces-grid">
        {pieces.map(({ slug, imageSource, title, artist }) => (
          <li key={slug}>
            <ArtPiecePreview
              slug={slug}
              image={imageSource}
              title={title}
              artist={artist}
              artPiecesInfo={artPiecesInfo}
              onToggleFavorite={onToggleFavorite}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtPieces;
