import styled from 'styled-components';

export const Box = styled.div`
  padding-top: 30px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Container = styled.div`
  max-width: 1300px;
  place-content: center;
  margin: 50px 50px 10px 50px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 60px;
  font-weight: black;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Formations = styled.div`
  max-width: 400px;
  border: 1px solid #707070;
  border-radius: 10px;
  margin: 8px;
  color: #fff;

  > div {
    margin: 10px;

    h1 {
      width: 270px;
    }

    strong {
      color: #707070;
    }

    p {
      color: #707070;
    }

    img {
      width: 80px;
      margin-left: 100px;
      margin-top: 20px;
    }
  }
`;
