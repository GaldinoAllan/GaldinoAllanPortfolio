import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1300px;
  place-content: center;
  margin: 50px 50px 10px 50px;
  width: 100%;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 60px;
  font-weight: black;
`;

export const Content = styled.div``;

export const Experience = styled.div`
  align-items: center;
  justify-content: center;
  margin: 50px;
  color: #fff;
  display: flex;

  > div {
    margin: 10px;

    h1 {
      width: 270px;
    }

    strong {
      color: #707070;
    }

    h4 {
      color: #707070;
    }

    p {
      max-width: 450px;
      margin: 24px 24px 24px 0;
      font-size: 22px;
    }
  }
  img {
    width: 576px;
  }
`;
