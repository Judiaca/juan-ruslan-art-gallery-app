import styled from "styled-components";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const ArtPiecePreviewContainer = styled.article`
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;
  transition: transform 0.2s;
  position: relative; // Make the container positioned so absolute positioning works within it
  /* Set a fixed width and height for the container */
  width: 300px; 
  height: 350px; /* Adjust the height as needed */
  display: flex;
  flex-direction: column;
  overflow: hidden; // Add this to clip overflowing content


  &:hover {
    transform: translateY(-5px);
  }

  figure {
    margin: 0;
    flex: 1; // Allow the figure to expand to fill available space
    display: flex;
    align-items: center; // Center the image vertically
    justify-content: center; // Center the image horizontally
  }

  img {
    max-width: 100%;   

    max-height: 100%;
    object-fit: contain; // Contain the image within the figure, maintaining aspect ratio
  }

  .caption {
    text-align: center;
    // Adjust margin-top if needed to accommodate the fixed height
  }

  h3 {
    margin-bottom: 0.25rem;
  }
`;

const StyledFavoriteButton = styled(FavoriteButton)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  /* Reduce the size and padding of the button */
  padding: 0.25rem; // Reduce padding
  font-size: 0.8rem; // Reduce font size

  /* Optionally, you can add other styles to further customize the button's appearance */
  /* For example: */
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* color: white; */
  /* border: none; */
  /* border-radius: 50%; */
`;

export default ArtPiecePreviewContainer;
export { StyledFavoriteButton };
