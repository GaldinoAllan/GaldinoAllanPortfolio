import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 50px;
  max-width: 1300px;
  margin: 0 auto;

  place-content: center;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 60px;
  font-weight: black;
`;

export const Techs = styled.div`
  align-content: center;
  justify-content: space-evenly;
  text-align: center;
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;

  a {
    text-decoration: none;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.5);
    }

    p {
      color: #707070;
    }

    img {
      width: 100px;
      height: 110px;
      padding-top: 10px;

      & + img {
        width: 130px;
        padding-left: 30px;
      }
    }
  }
`;
