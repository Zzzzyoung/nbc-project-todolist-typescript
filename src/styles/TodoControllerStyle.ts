import styled from "styled-components";

export const StLoading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 18px;
  font-weight: 600;

  & img {
    width: 100px;
    height: 100px;
  }
`;

export const StError = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 18px;
  font-weight: 600;
`;
