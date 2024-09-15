import Image from "next/image";
// import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Comments from "../Comments/Comments";
import CommentForm from "../CommentForm/CommentForm";
import styles from "./artPieceDetailsStyles";
import BackButton from "../BackButton/BackButton";

const {
  Container,
  ImageContainer,
  DetailsContainer,
  Title,
  DetailsItem,
  ColorsList,
  ColorItem,
} = styles;

const ArtPieceDetails = ({
  slug,
  image,
  title,
  artist,
  year,
  genre,
  colors,
  artPiecesInfo,
  onToggleFavorite,
  onSubmitComment,
}) => {
  const artPiece = artPiecesInfo.find((info) => info.slug === slug);

  return (
    <Container>
      <div>
        <ImageContainer>
          {/* <FavoriteButton
            isFavorite={artPiece?.isFavorite}
            onToggleFavorite={onToggleFavorite} 
          /> */}
          <h1>{title}</h1>
          <Image src={image} width={400} height={400} alt={artist} />
        </ImageContainer>

        <DetailsContainer>
          <DetailsItem>
            Artist: <span>{artist}</span>
          </DetailsItem>
          <DetailsItem>
            Year: <span>{year}</span>
          </DetailsItem>
          <DetailsItem>
            Genre: <span>{genre}</span>
          </DetailsItem>
          <ColorsList>
            {colors.map((color) => {
              return (
                <ColorItem key={color} color={color}>
                  {color}
                </ColorItem>
              );
            })}
          </ColorsList>
        </DetailsContainer>
      </div>
      {/* <BackButton
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
        }}
      /> */}

      <div>
        <Comments comments={artPiece?.comments} />
        <CommentForm slug={slug} onSubmitComment={onSubmitComment} />
      </div>
    </Container>
  );
};

export default ArtPieceDetails;
//     <article>
//       <FavoriteButton
//         isFavorite={artPiece?.isFavorite}
//         onToggleFavorite={onToggleFavorite}
//       />
//       <h1>{title}</h1>
//       <Image src={image} width={400} height={400} alt={artist} />
//       <p>
//         Artist: <span>{artist}</span>
//       </p>
//       <p>
//         Year: <span>{year}</span>
//       </p>
//       <p>
//         Genre: <span>{genre}</span>
//       </p>
//       <ul>
//         {colors.map((color) => {
//           return <li key={color}>{color}</li>;
//         })}
//       </ul>
//       <Comments comments={artPiece?.comments} />
//       <CommentForm slug={slug} onSubmitComment={onSubmitComment} />
//     </article>
//   );
// };

// export default ArtPieceDetails;
