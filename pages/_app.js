import useSWR from "swr";
import useImmerLocalStorageState from "@/lib/hook/useImmerLocalStorageState.js";
import fatcher from "@/lib/hook/fatcher";
import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import Preloader from "@/components/Preloader/Preloader";

//FavoriteButton -  component ({isFavorite, onToggleFavorite}) - need test
//CommentForm component ({onSubmitComment}) - need test
//Comments component ({comments}) - need test

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fatcher
  );

  const [artPiecesInfo, setArtPiecesInfo] = useImmerLocalStorageState(
    "artPiecesInfo",
    {
      defaultValue: [],
    }
  );

  const handleToggleFavorite = (slug) => {
    const currentPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (!currentPiece) {
      setArtPiecesInfo([...artPiecesInfo, { slug: slug, isFavorite: true }]);
      return;
    }
    setArtPiecesInfo(
      artPiecesInfo.map((piece) =>
        piece.slug === slug
          ? { slug: slug, isFavorite: !piece.isFavorite }
          : piece
      )
    );
  };

  // Handle adding comments
  const handleSubmitComment = (slug, comment) => {
    setArtPiecesInfo((prevState) =>
      prevState.map((piece) =>
        piece.slug === slug
          ? {
              ...piece,
              comments: [...(piece.comments || []), comment], // append new comment
            }
          : piece
      )
    );
  };

  if (error) {
    return <div>Error during data loading</div>;
  }

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        artPieces={data}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
        onSubmitComment={handleSubmitComment}
      />
    </Layout>
  );
}
