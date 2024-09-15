import styled from "styled-components";

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;   

  padding: 20px;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

const DetailsContainer = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const DetailsItem = styled.p`
  margin-bottom: 5px;
  font-size: 16px;

  span {
    font-weight: bold;
  }
`;

const ColorsList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 20px;
`;

const ColorItem = styled.li`
  background-color: ${(props) => props.color};
  color: white;
  padding: 5px 10px;
  border-radius: 3px;
`;

export default {
  Container,
  ImageContainer,
  DetailsContainer,
  Title,
  DetailsItem,
  ColorsList,
  ColorItem,
};
