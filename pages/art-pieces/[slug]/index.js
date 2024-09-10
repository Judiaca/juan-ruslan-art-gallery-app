import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";

const ArtPieceDetailsPage = ({ artPieces }) => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <h1>{slug}</h1>
      <ArtPieceDetails slag={slug} />
    </>
  );
};

export default ArtPieceDetailsPage;
