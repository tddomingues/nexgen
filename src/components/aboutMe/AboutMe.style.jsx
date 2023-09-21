import styled from "styled-components";

import sobrenos from "../../assets/sobrenos.webp";

export const Container = styled.section`
  padding: 2em 60px 2em 60px;
  display: flex;
  justify-content: space-between;
  gap: 60px;
  background-color: #e8e8e8;

  @media screen and (max-width: 576px) {
    padding: 2em 15px 2em 15px;
    flex-direction: column-reverse;
  }
`;
export const Box = styled.div`
  & > h2 {
    font-size: 36px;
    color: #00a0b0;
    padding-bottom: 25px;
  }

  & > h2 > span {
    color: #000;
  }

  & > p {
    font-size: 18px;
    color: #000;
  }

  & > p > span {
    color: #333333;
    font-weight: bold;
  }

  & > button {
    margin-top: 100px;
    border-radius: 30px;
    font-size: 16px;
    padding: 6px 12px;
    transition: 0.4s;
    background-color: #00a0b0;
    color: #f6f6f6;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & > button > .bi-arrow-bar-right {
    font-size: 20px;
  }

  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > h2 {
      font-size: 31px;
    }

    & > p {
      font-size: 16px;
    }

    & > button {
      margin-top: 30px;
      align-self: center;
    }
  }
`;

export const Image = styled.div`
  background-image: url(${sobrenos});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 400px;
`;
