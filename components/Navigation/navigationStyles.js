import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;

  height: 100%;
`;

const Menu = styled.menu`
  display: flex;
  width: 100%;
  height: 100%;
`;

const MenuItem = styled.li`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 33.333333%;
  color: inherit;
  height: 100%;
  background: ${({ $active }) => ($active ? "#2A324B" : "#c7ccdb")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#2A324B")};
  &:hover {
    background: ${({ $active }) => ($active ? "#2A324B" : "#9096b4")};
  }
  a {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 100%;
    font-weight: 700;
    font-size: 22px;
    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
  }
`;

export default { Nav, Menu, MenuItem };
