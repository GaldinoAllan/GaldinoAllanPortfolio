import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  max-width: 1400px;
  margin: 0 auto;

  align-items: center;
  padding: ${({ size }) => (size === 'small' ? '0 20px 150px ' : '0 20px')};

  header {
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    font-size: 58px;
    font-weight: bold;
    display: flex;
    color: #ffce00;

    nav {
      a {
        color: #707070;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        & + a {
          margin-left: 20px;
        }
        &:hover {
          color: #fff;
          border-bottom: 3px solid #ffce00;
        }
      }
    }
  }
`;
