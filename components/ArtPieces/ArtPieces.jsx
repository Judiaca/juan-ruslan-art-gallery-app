import Link from "next/link";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

const ArtPieces = ({ pieces }) => {
  return (
    <div>
      <h2>Art Pieces Collection</h2>
      <ul className="art-pieces-grid">
        {pieces.map(({ slug, imageSource, title, artist }) => (
          <li key={slug}>
            <Link href={`/art-pieces/${slug}`}>
              <ArtPiecePreview
                image={imageSource}
                title={title}
                artist={artist}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtPieces;
