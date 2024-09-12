import useSWR from "swr";
import useImmerLocalStorageState from "@/lib/hook/useImmerLocalStorageState.js";
import fatcher from "@/lib/hook/fatcher";
import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import Preloader from "@/components/Preloader/Preloader";

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
          ? { ...piece, isFavorite: !piece.isFavorite }
          : piece
      )
    );
  };

  const handleSubmitComment = (slug, comment) => {
    const currentInfo = artPiecesInfo.find((info) => info.slug === slug);

    if (!currentInfo) {
      setArtPiecesInfo([
        ...artPiecesInfo,
        { slug: slug, isFavorite: false, comments: [comment] },
      ]);
      return;
    }

    const updatedInfo = {
      ...currentInfo,
      comments: Array.isArray(currentInfo.comments)
        ? [...currentInfo.comments, comment]
        : [comment],
    };

    setArtPiecesInfo(
      artPiecesInfo.map((info) => (info.slug === slug ? updatedInfo : info))
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
