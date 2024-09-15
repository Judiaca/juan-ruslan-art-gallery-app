import styled from "styled-components";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const StyledFavoriteButton = styled(FavoriteButton)`
  z-index: 2;
  /* You can add additional styles for the FavoriteButton here if needed */
`;

const ArtPiecePreviewContainer = styled.article`
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;
  transition: transform 0.2s;
  position: relative;
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
  }

  figure {
    margin: 0;
    display: flex;
    // flex: 1; // Allow the figure to expand to fill available space
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  img {
    max-width: 100%;
    max-height: 200px; // Limit image height to allow space for text
    object-fit: contain;
  }

  .caption {
    text-align: center;
    margin-top: 1rem; // Add spacing between image and text
  }

  h3 {
    margin-bottom: 0.25rem;
  }

  ${StyledFavoriteButton} {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.25rem;
    font-size: 0.8rem;
  }
`;

// const StyledFavoriteButton = styled(FavoriteButton)`
//   position: absolute;
//   top: 0.5rem;
//   right: 0.5rem;

//   /* Reduce the size and padding of the button */
//   padding: 0.25rem;
//   font-size: 0.8rem;
// `;

export default ArtPiecePreviewContainer;
export { StyledFavoriteButton };
