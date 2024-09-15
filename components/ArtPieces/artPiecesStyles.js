import styled from "styled-components";

const ArtPiecesGrid = styled.ul`
  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  // gap: 20px;
  // padding: 20px; /* Optional: Add padding for spacing around the grid */
  // list-style: none; /* Remove default list styling */

  width: 100%;
  height: 80%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  overflow: scroll;
  background-color: white;
  padding: 1rem;
`;

export default ArtPiecesGrid;
