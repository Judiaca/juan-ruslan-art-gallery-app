import Image from "next/image";
import Link from "next/link";
import ArtPiecePreviewContainer, {
  StyledFavoriteButton,
} from "./ArtPiecePreviewStyles";

const ArtPiecePreview = ({
  slug,
  image,
  title,
  artist,
  artPiecesInfo,
  onToggleFavorite,
}) => {
  const handleImageError = (event) => {
    event.target.src = "/path/to/placeholder-image.jpg"; // Replace with your placeholder image path
  };

  const isFavorite =
    artPiecesInfo.find((piece) => piece.slug === slug)?.isFavorite || false;

  return (
    <article>
      {" "}
      {/* No need for a separate styled component for the container if you're not adding specific styles to it */}
      <StyledFavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={() => onToggleFavorite(slug)}
        data-isfavorite={isFavorite}
      />
      <Link href={`/art-pieces/${slug}`}>
        <figure>
          <Image
            src={image}
            alt={artist}
            width={300}
            height={300}
            priority
            onError={handleImageError}
          />
          <figcaption>
            <h3>{title}</h3>
            <p>By: {artist}</p>
          </figcaption>
        </figure>
      </Link>
    </article>
  );
};

export default ArtPiecePreview;

//     <ArtPiecePreviewContainer>
//       {" "}
//       {/* Use the styled component */}
//       <StyledFavoriteButton
//         isFavorite={
//           artPiecesInfo.find((piece) => piece.slug === slug)?.isFavorite
//         }
//         onToggleFavorite={() => onToggleFavorite(slug)}
//       />
//       <Link href={`/art-pieces/${slug}`}>
//         <figure>
//           <Image
//             src={image}
//             alt={artist}
//             width={300}
//             height={300}
//             priority
//             onError={handleImageError}
//           />
//           <figcaption className="caption">
//             <h3>{title}</h3>
//             <p>By: {artist}</p>
//           </figcaption>
//         </figure>
//       </Link>
//     </ArtPiecePreviewContainer>
//   );
// };

// export default ArtPiecePreview;
