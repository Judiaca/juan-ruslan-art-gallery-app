import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  background-color: #c7ccdb;

  height: 80px;
  section {
    color: #484b57;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100%;
    border-bottom: 1px solid #ccc;
  }
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
`;

const Footer = styled.footer`
  position: sticky;
  background-color: #c7ccdb;
  bottom: 0;
  width: 100%;
  height: 60px;
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 18px; // Add rounded corners to the footer section
  }
`;

export default { Header, Main, Footer };
