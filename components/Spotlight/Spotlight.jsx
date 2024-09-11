import Image from "next/image";

const Spotlight = ({ image, artist }) => {
  return (
    <div>
      {image && (
        <Image src={image} width={400} height={400} alt={artist} priority />
      )}
      <p>
        Artist: <span>{artist}</span>
      </p>
    </div>
  );
};

export default Spotlight;
