import ArtPieces from "@/components/ArtPieces/ArtPieces";
import Section from "@/components/Section/Section";
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
    <Section>
      {favorites.length > 0 ? (
        <ArtPieces
          pieces={favorites}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={onToggleFavorite}
        />
      ) : (
        <h1>Nothing found ...</h1>
      )}
    </Section>
  );
};

export default FavoritesPage;
