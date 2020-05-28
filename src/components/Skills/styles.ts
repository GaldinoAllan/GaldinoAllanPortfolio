import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1300px;
  place-content: center;
  margin: 50px;
  width: 100%;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 60px;
  font-weight: black;
`;

export const Techs = styled.div`
  max-width: 1300px;
  align-content: center;
  justify-content: space-between;
  text-align: center;
  padding-top: 10px;
  display: flex;

  a {
    text-decoration: none;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.5);

      /* & + a {
        transform: scale(1.2);
      } */
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
