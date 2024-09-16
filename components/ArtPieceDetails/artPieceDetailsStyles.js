import styled from "styled-components";

const Container = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  gap: 80px;
  position: relative;
  margin-bottom: 150px;
  @media screen and (max-width: 767px) {
    gap: 40px;
  }
`;

const Picture = styled.div`
  width: 44%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: auto;
    border: 20px solid var(--primary-color);
    box-shadow: 0px 20px 30px -10px rgba(0, 0, 0, 0.7);
    background: #ccc;
    margin-bottom: 20px;
  }
`;

const Description = styled.div`
  width: calc(56% - 80px);
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  h2 {
    display: block;
    width: 100%;
    font-size: 2.8rem;
    margin-top: 10px;
    margin-bottom: 24px;
    color: var(--primary-color);
    @media screen and (max-width: 767px) {
      font-size: 2rem;
    }
  }
  ul {
    margin-bottom: 40px;
    li {
      font-size: 22px;
      padding: 4px 0px;
      color: #9b9999;
      @media screen and (max-width: 767px) {
        font-size: 16px;
      }
      span {
        color: var(--text-color);
        font-weight: 700;
      }
    }
  }
`;

const Colors = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  gap: 20px;
  position: relative;
`;

const ColorItem = styled.li`
  flex: 1;
  background-color: ${(props) => props.color};
  box-shadow: 0px 20px 30px -10px rgba(0, 0, 0, 0.7);
  &:before {
    content: "";
    display: block;
    width: 100%;
    padding-top: 100%;
  }
`;

export default {
  Container,
  Picture,
  Description,
  Colors,
  ColorItem,
};
