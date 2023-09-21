import { styled } from "styled-components";

export const ContactContainer = styled.section`
  background-color: #e8e8e8;
`;

export const Content = styled.section`
  padding: 2em 60px 2em 60px;

  & > h2 {
    color: #00a0b0;
    font-size: 36px;
    padding-bottom: 25px;
  }

  & > h2 > span {
    color: #000;
  }

  & > p {
    font-size: 18px;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 576px) {
    padding: 2em 15px 2em 15px;

    & > h2 {
      font-size: 31px;
    }

    & > p {
      font-size: 16px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;

  & > div {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 600px;
    padding: 20px;
    transition: 0.4s;
    background-color: #333333;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  }

  & > div > span {
    position: absolute;
    background-color: #333333;
    border: 1px solid #f6f6f6;
    top: -45px;
    height: 90px;
    width: 90px;
    display: grid;
    place-items: center;
    border-radius: 50%;
  }

  & > div > h3 {
    text-align: center;
    padding: 30px 0px 10px 0px;
    font-size: 27px;
    color: #00a0b0;
    transition: 0.4s;
  }

  & > div > p {
    font-size: 18px;
    color: #f6f6f6;
    padding: 0px 1em 0px 1em;
  }

  & > div > button {
    font-size: 16px;
    padding: 6px 12px;
    margin-top: 20px;
    transition: 0.4s;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    border-radius: 30px;
    background-color: #00a0b0;
    color: #f6f6f6;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  }

  & > div > button > .bi-arrow-bar-right {
    font-size: 20px;
  }

  & > div > span > .bi-chat,
  .bi-calendar {
    font-size: 40px;
    color: #f6f6f6;
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
    gap: 80px;
    & > div {
      width: 100%;
    }

    & > div > h3 {
      font-size: 23px;
    }

    & > div > p {
      font-size: 16px;
    }
  }
`;

export const Email = styled.div`
  margin-top: 60px;
  background-color: #00a0b0;
  padding: 25px 60px 25px 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & > p {
    font-size: 36px;
    font-weight: bold;
    color: #fff;
  }

  & > form {
    display: flex;
    padding: 10px;
    background-color: #fff;
  }

  & > form input {
    outline: none;
    border: none;
    background-color: #fff;
    padding: 12px;
    font-size: 20px;
  }

  & > form button {
    background-color: #00a0b0;
    height: 100%;
    padding: 12px;
    font-size: 20px;
    color: #f6f6f6;
    font-weight: bold;
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
    padding: 2em 15px 2em 15px;

    & > p {
      font-size: 31px;
    }

    & > form input {
    width: 80%;
  }

    & > form {
      width: 100%;
    }
  }
`;
