import { useRouter } from "next/router";
import styled from "styled-components";

const BackBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: var(--primary-color);
  color: var(--white-color);
  margin: 40px 0px;
  padding: 14px 30px 14px 20px;
  font-size: 16px;
  font-weight: 400;
  gap: 14px;
  @media screen and (max-width: 767px) {
    padding: 10px 20px 10px 16px;
    margin: 20px 0px;
    font-size: 12px;
  }
`;

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <BackBtn onClick={handleBack}>
      <span>⇐</span> Back
    </BackBtn>
  );
};

export default BackButton;
