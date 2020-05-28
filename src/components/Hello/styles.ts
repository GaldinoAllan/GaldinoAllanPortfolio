import styled from 'styled-components';

export const Container = styled.div`
  justify-content: center;
  margin: 90px;

  > div {
    justify-content: center;
    margin: 110px;
    display: flex;
    align-items: center;

    > div {
      padding-left: 200px;

      strong {
        color: #fff;
        font-size: 80px;
        padding: 10px 0;
      }

      p {
        font-weight: bold;
        color: #707070;
        font-size: 30px;
        max-width: 300px;
      }
    }
  }
`;
