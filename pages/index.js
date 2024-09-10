import Spotlight from "@/components/Spotlight/Spotlight";
import { useEffect, useState } from "react";

const SpotlightPage = ({ artPieces }) => {
  const [randomPiece, setRandomPiece] = useState(null);

  useEffect(() => {
    setRandomPiece(artPieces[Math.floor(Math.random() * artPieces.length)]);
    const timer = setInterval(() => {
      setRandomPiece(artPieces[Math.floor(Math.random() * artPieces.length)]);
    }, 5000);

    return () => clearInterval(timer);
  }, [artPieces, setRandomPiece]);

  if (!randomPiece) return null;

  const { imageSource, artist } = randomPiece;

  return (
    <div>
      <Spotlight image={imageSource} artist={artist} />
    </div>
  );
};

export default SpotlightPage;
