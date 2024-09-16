import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  background-color: var(--primary-color);
  height: 80px;
  z-index: 50;
  box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.3);
  section {
    color: var(--white-color);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100%;
    h1 {
      font-size: 50px;
      @media screen and (max-width: 767px) {
        font-size: 40px;
      }
    }
  }
`;

const Main = styled.main`
  flex: 1;
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  background: url("https://png.pngtree.com/thumb_back/fw800/background/20231025/pngtree-white-brick-wall-a-background-with-a-texture-image_13713415.png")
    repeat-y center top;
  background-size: 100% auto;
  padding-top: 100px;

  section {
    @media screen and (max-width: 1023px) {
      max-width: 768px;
    }
    @media screen and (max-width: 767px) {
      max-width: 414px;
    }
  }
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.8);
    z-index: 0;
  }
  > * {
    position: relative;
    z-index: 1;
  }
`;

const Footer = styled.footer`
  position: fixed;
  background-color: #c7ccdb;
  bottom: 0;
  width: 100%;
  height: 60px;
  z-index: 2;
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    @media screen and (max-width: 767px) {
      padding: 0;
    }
  }
`;

export default { Header, Main, Footer };
