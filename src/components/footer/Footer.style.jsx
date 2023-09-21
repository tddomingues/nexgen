import { styled } from "styled-components";

export const Info = styled.div`
  padding: 2em 30px 2em 30px;
  background-color: #e8e8e8;
  display: flex;
  justify-content: space-evenly;

  & > div > p {
    font-size: 23px;
    font-weight: bold;
    padding-bottom: 20px;
    color: #000;
  }

  & > div > div > p {
    color: #333333;
    padding-bottom: 5px;
    width: 300px;
    font-size: 16px;
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
    padding: 2em 15px 2em 15px;
    
    & > div > p {
    font-size: 23px;
    padding-bottom: 0px;
  }

    & > div > div > p {
    padding-bottom: 0px;
    width: 100%;
    font-size: 16px;
  } 
  }
`;

export const Property = styled.div`
  background-color: #333333;
  padding: 1em 15px 1em 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div > p {
    color: #f6f6f6;
    font-size: 16px;
    text-align: center;
  }
`;
