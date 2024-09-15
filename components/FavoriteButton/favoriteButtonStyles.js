// import styled from "styled-components";

// const FavoriteButtonContainer = styled.button`
//   position: absolute;
//   top: 0.5rem;
//   right: 0.5rem;

//   /* Basic button styling */
//   padding: 0.5rem;
//   border: none;
//   background-color: transparent;
//   cursor: pointer;
//   transition: background-color 0.2s;

//   /* Icon styling */
//   svg {
//     width: 1.5rem;
//     height: 1.5rem;
//     fill: currentColor;
//   }

//   /* Hover effect */
//   &:hover {
//     background-color: rgba(0, 0, 0, 0.1);
//   }

//   /* Active/Inactive states */
//   /* Filled heart (favorited) */
//   &[data-isfavorite="true"] {
//     color: red;
//   }

//   /* Transparent heart (not favorited) */
//   &[data-isfavorite="false"] {
//     color: #ccc;
//   }
// `;

// export default FavoriteButtonContainer;

import styled from "styled-components";

const FavoriteButtonContainer = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  svg {
    width: 24px; // Adjust size as needed
    height: 24px;
  }
`;

export default FavoriteButtonContainer;
