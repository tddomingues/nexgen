import styled from "styled-components";

import ImageIA from "../../assets/ia.jpg";
import ImageVR from "../../assets/vr.jpg";
import ImageC from "../../assets/consultoria.jpg";
import ImageI from "../../assets/integrandoSistema.jpg";
import ImagemM from "../../assets/suporte.jpg";
import ImagemA from "../../assets/automocao.jpg";

export const Container = styled.section`
  padding: 2em 60px 2em 60px;
  background-color: #333333;

  & h2 {
    padding-bottom: 45px;
    color: #00a0b0;
    font-size: 36px;
  }

  & span {
    color: #f6f6f6;
  }

  @media screen and (max-width: 576px) {
    padding: 2em 30px 2em 30px;

    & h2 {
      font-size: 31px;
    }
  }
`;

export const Delimiter = styled.section`
  position: relative;

  button {
    background-color: #e8e8e856;
    padding: 5px;
  }

  .btn-left,
  .btn-right {
    position: absolute;
    top: 40%;
  }

  .btn-left {
    left: -50px;
  }

  .btn-right {
    right: -50px;
  }

  .bi-chevron-left,
  .bi-chevron-right {
    font-size: 60px;
    opacity: 0.5;
    transition: 0.3s;
    color: #333333;
  }

  .bi-chevron-left:hover,
  .bi-chevron-right:hover {
    opacity: 1;
  }

  @media screen and (max-width: 576px) {
    .btn-left {
      left: -30px;
    }

    .btn-right {
      right: -30px;
    }
  }
`;

export const Carousel = styled.section`
  display: flex;
  align-items: center;
  gap: 60px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 576px) {
    gap: 20px;
  }
`;

export const Info = styled.section`
  background-color: #fffcff;
  position: relative;
  padding: 10px;
  margin-top: 60px;
  height: 600px;
  width: 530px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  & > p {
    padding: 10px;
    font-size: 18px;
    color: #000;
  }

  & > div:nth-child(1) {
    width: 80%;
    height: 100px;
    background-color: #00a1b0;
    position: absolute;
    top: -50px;
    transform: translateX(-50%);
    left: 50%;
    display: grid;
    place-items: center;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  }

  & > div:nth-child(1) > h4 {
    padding: 10px;
    font-size: 27px;
    color: #f6f6f6;
  }

  & .image {
    background-position: center;
    background-size: cover;
    width: 500px;
    height: 500px;
    margin-top: 20px;
  }

  & .service-1-image {
    background-image: url(${ImageIA});
  }

  & .service-2-image {
    background-image: url(${ImageVR});
  }

  & .service-3-image {
    background-image: url(${ImageC});
  }

  & .service-4-image {
    background-image: url(${ImageI});
  }

  & .service-5-image {
    background-image: url(${ImagemM});
  }

  & .service-6-image {
    background-image: url(${ImagemA});
  }

  & > button {
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

  & > button > .bi-arrow-bar-right {
    font-size: 20px;
  }

  @media screen and (max-width: 576px) {
    width: 300px;

    & > p {
      font-size: 16px;
    }

    & .image {
      width: 250px;
      height: 250px;
      margin-top: 40px;
    }

    & > div:nth-child(1) {
      height: 130px;
      top: -65px;
    }

    & > div:nth-child(1) > h4 {
      font-size: 23px;
      text-align: center;
    }
  }
`;
