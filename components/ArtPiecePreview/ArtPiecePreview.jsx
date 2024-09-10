import Image from "next/image";

const ArtPiecePreview = ({ image, title, artist }) => {
  return (
    <article>
      {image && <Image src={image} width={400} height={400} alt={title} />}
      <h2>{title}</h2>
      <p>
        Artist: <span>{artist}</span>
      </p>
    </article>
  );
};

export default ArtPiecePreview;
