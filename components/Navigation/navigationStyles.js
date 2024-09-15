import styled from "styled-components";

const Menu = styled.menu`
  display: flex;
  gap: 300px; // Add gap between menu items
`;

const MenuItem = styled.li`
  font-weight: 1.5rem;
  text-decoration: none;
  color: inherit;
  padding: 10px;
  // display: grid;
  place-items: center;
  height: 100%;
  // width: 100%;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#9096B4" : "#2A324B")};
    color: ${(props) => (props.isActive ? "#484B57" : "white")};
  }

  background-color: ${(props) => (props.isActive ? "#8C92AD" : "#C7CCDB")};
  color: ${(props) => (props.isActive ? "white" : "#484B57")};
`;

export default { Menu, MenuItem };
