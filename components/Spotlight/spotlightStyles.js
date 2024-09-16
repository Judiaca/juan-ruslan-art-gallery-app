import styled from "styled-components";

const Hero = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px auto 100px auto;
  max-width: 400px;
  img {
    width: 100%;
    height: auto;
    border: 16px solid var(--primary-color);
    padding: 10px;
    box-shadow: 0px 20px 30px -10px rgba(0, 0, 0, 0.7);

    background: #f5f5dc;
    @media screen and (max-width: 767px) {
      border: 10px solid var(--primary-color);
      padding: 6px;
    }
  }
`;

const ArtistInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
  padding: 20px 20px 0px 10px;
  p {
    font-size: 20px;
    font-weight: 400;
    span {
      font-weight: 700;
    }
  }
`;

export default { Hero, ArtistInfo };
