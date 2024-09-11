import Image from "next/image";

const ArtPiecePreview = ({ image, title, artist }) => {
  return (
    <article className="art-piece-preview">
      <Image src={image} alt={artist} width={300} height={300} priority />
      <h3>{title}</h3>
      <p>By: {artist}</p>
    </article>
  );
};

export default ArtPiecePreview;
