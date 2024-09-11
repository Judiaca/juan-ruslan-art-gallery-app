import Image from "next/image";
// import Link from "next/link";

const ArtPiecePreview = ({ image, title, artist }) => {
  return (
    <div className="art-piece-preview">
      <Image src={image} alt={title} width={300} height={300} />
      <h3>{title}</h3>
      <p>By: {artist}</p>
    </div>
  );
};

export default ArtPiecePreview;
