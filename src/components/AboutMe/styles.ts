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
