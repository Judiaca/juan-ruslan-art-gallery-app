import styled from "styled-components";

const Article = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
  a {
    display: block;
    position: relative;
    width: 100%;
    border: 16px solid var(--primary-color);
    padding: 10px;
    box-shadow: 0px 20px 30px -10px rgba(0, 0, 0, 0.7);
    overflow: hidden;
    &:before {
      content: "";
      display: block;
      width: 100%;
      padding-top: 120%;
    }
    img {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      left: 0px;
      top: 0px;
      object-fit: cover;
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  padding-right: 54px;
  h3 {
    display: block;
    font-weight: 700;
    font-size: 24px;
    width: 100%;
  }
  button {
    position: absolute;
    right: 10px;
    top: 0px;
  }
  p {
    font-size: 14px;
    span {
      font-weight: 700;
    }
  }
`;

export default { Article, Info };
