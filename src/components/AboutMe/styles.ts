import styled from 'styled-components';
import AboutMe from '../../assets/aboutMe.svg';

export const Box = styled.div`
  justify-content: center;
  display: flex;
  align-items: left;
`;

export const Today = styled.h1`
  color: #707070;
  font-size: 20px;
  font-weight: black;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 60px;
  font-weight: black;
`;

export const Container = styled.div`
  padding-top: 20px;
  margin: 0 50px;

  place-content: center;

  width: 100%;
  max-width: 1000px;

  align-items: left;

  > div {
    display: flex;
    align-items: center;

    a {
      width: 100px;
      height: 60px;
      margin-left: 20px;
      text-decoration: none;
      border: 2px solid #fff;
      border-radius: 25px;
      color: #fff;
      align-items: center;
      display: flex;
      justify-content: center;
      transition: transform 0.2s;

      p {
        font-size: 16px;
        margin-left: 5px;
      }

      svg {
        margin: 5px;
      }

      &:hover {
        transform: scale(1.1);
        background: #fff;
        width: 100px;
        height: 60px;
        color: #000;
        font-size: 32px;
        justify-content: center;

        p {
          display: none;
        }
      }
    }
  }

  p {
    margin: 20px 0;
    color: #fff;
    font-size: 27px;
  }
`;

export const Background = styled.div`
  max-width: 400px;
  flex: 1;
  background: url(${AboutMe}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  background-color: #393939;
`;
