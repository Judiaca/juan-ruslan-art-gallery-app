import ArtPieces from "@/components/ArtPieces/ArtPieces";
import { useEffect, useState } from "react";

const FavoritesPage = ({ artPieces, artPiecesInfo, onToggleFavorite }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const currentFavoritesList = artPieces.filter((piece) =>
      artPiecesInfo.find((info) => info.slug === piece.slug && info.isFavorite)
    );
    setFavorites(currentFavoritesList);
  }, [artPiecesInfo, setFavorites]);

  return (
    <>
      {favorites.length > 0 ? (
        <ArtPieces
          pieces={favorites}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={onToggleFavorite}
        />
      ) : (
        <h1>Nothing found ...</h1>
      )}
    </>
  );
};

export default FavoritesPage;
