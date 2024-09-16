import styled from "styled-components";

const CommentsSection = styled.section`
  display: block;
  width: 100%;
  margin-top: 50px;
  span {
    display: block;
    font-size: 24px;
    margin-bottom: 30px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    li {
      width: 100%;
      position: relative;
      background: var(--white-color);
      padding: 50px 20px 20px 20px !important;
      box-shadow: 0px 20px 30px -20px rgba(0, 0, 0, 0.2);
      font-size: 16px !important;
      strong {
        background: #c7ccdb;
        color: var(--primary-color);
        font-size: 14px;
        padding: 10px 14px;
        font-weight: 700;
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
      }
      p {
        color: var(--text-color);
      }
    }
  }
`;

export default { CommentsSection };
