import { styled } from "styled-components";

export const FaqContainer = styled.section`
  padding: 2em 60px 2em 60px;
  background-color: #333333;

  & > h2 {
    font-size: 36px;
    color: #00a0b0;
    padding-bottom: 25px;
  }

  & > h2 > span {
    color: #f6f6f6;
  }

  @media screen and (max-width: 576px) {
    padding: 2em 15px 2em 15px;

    & > h2 {
      font-size: 31px;
    }
  }
`;

export const Question = styled.div`
  background-color: #e8e8e8;
  margin: 10px auto;
  width: 80%;

  & > div:nth-child(1) {
    cursor: pointer;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
  }

  & > div:nth-child(1) > p {
    font-weight: bold;
    font-size: 24px;
  }

  & > div:nth-child(1) > span > .bi {
    font-size: 30px;
    color: #00a0b0;
  }

  & > .text-faq {
    overflow: hidden;
    font-size: 20px;
    background-color: #fff;
    transition: 0.5s;
  }

  & > .active {
    overflow: hidden;
    max-height: 500px;
  }

  & > .disable {
    max-height: 0px;
    overflow: hidden;
  }

  & > div:nth-child(2) > p {
    padding: 10px;
    color: #000;
    display: grid;
    height: 100%;
    place-items: center;
    font-size: 18px;
  }

  @media screen and (max-width: 576px) {
    width: 100%;

    & > div:nth-child(1) > p {
      font-size: 20.5px;
    }

    & > div:nth-child(2) > p {
      font-size: 16px;
    }
  }
`;

