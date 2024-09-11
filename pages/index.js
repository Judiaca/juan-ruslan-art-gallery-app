import Spotlight from "@/components/Spotlight/Spotlight";
import { useEffect, useState } from "react";

const SpotlightPage = ({ artPieces, artPiecesInfo, onToggleFavorite }) => {
  const [randomPiece, setRandomPiece] = useState(null);

  useEffect(() => {
    setRandomPiece(artPieces[Math.floor(Math.random() * artPieces.length)]);
    const timer = setInterval(() => {
      setRandomPiece(artPieces[Math.floor(Math.random() * artPieces.length)]);
    }, 5000);

    return () => clearInterval(timer);
  }, [artPieces, setRandomPiece]);

  if (!randomPiece) return null;

  const { slug, imageSource, artist } = randomPiece;

  return (
    <div>
      <Spotlight
        image={imageSource}
        artist={artist}
        isFavorite={
          artPiecesInfo.find((piece) => piece.slug === slug)?.isFavorite
        }
        onToggleFavorite={() => onToggleFavorite(slug)}
      />
    </div>
  );
};

export default SpotlightPage;
