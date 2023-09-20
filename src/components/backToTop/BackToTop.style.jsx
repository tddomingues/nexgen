import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 11111111;

  & > div {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #00a0b0;
  }

  & > div:hover {
    transform: scale(1.05);
  }

  & > div > .bi {
    font-size: 60px;
    color:  #f6f6f6;
  }

  @media screen and (max-width: 576px) {
    & > div {
    width: 60px;
    height: 60px;
  }

  & > div > .bi {
    font-size: 50px;
  }
  }
`;
