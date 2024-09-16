import styled from "styled-components";

const Title = styled.h2`
  font-size: 40px;
  color: var(--primary-color);
  margin: 40px 0px;
  font-weight: 700;
`;

const ArtPiecesGrid = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  gap: 30px;
  margin-bottom: 150px;
  li {
    width: calc((100% - 60px) / 3);
    @media screen and (max-width: 1023px) {
      width: calc((100% - 30px) / 2);
    }
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
`;

export default { Title, ArtPiecesGrid };
