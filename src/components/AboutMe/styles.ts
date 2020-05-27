import styled from 'styled-components';

export const Box = styled.div`
  background-color: #393939;
  padding-top: 20px;
  width: 100%;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 60px;
  font-weight: black;
  margin-left: 50px;
`;

export const Today = styled.h1`
  color: #707070;
  font-size: 20px;
  font-weight: black;
  margin-left: 50px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px;

  p {
    color: #fff;
    font-size: 27px;
    max-width: 800px;
  }

  img {
    width: 300px;
    margin-left: 50px;
    margin-bottom: 50px;
  }
`;
