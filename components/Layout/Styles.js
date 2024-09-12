import styled from "styled-components";

const Header = styled.header`
  display: block;
  width: 100%;

  height: 80px;
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    height: 100%;
    border-bottom: 1px solid #ccc;
  }
`;

const Footer = styled.footer`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  align-content: center;
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100%;
    border-top: 1px solid #ccc;
  }
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
`;

export default { Header, Footer, Main };
