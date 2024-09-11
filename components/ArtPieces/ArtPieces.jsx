import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

const ArtPieces = ({ pieces }) => {
  return (
    <div>
      <h2>Art Pieces Collection</h2>
      <div className="art-pieces-grid">
        {pieces.map((piece) => (
          <ArtPiecePreview
            key={piece.id}
            image={piece.imageSource}
            title={piece.title}
            artist={piece.artist}
          />
        ))}
      </div>
    </div>
  );
};

export default ArtPieces;
