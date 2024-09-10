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
    { defaultValue: [] }
  );

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
      />
    </Layout>
  );
}
