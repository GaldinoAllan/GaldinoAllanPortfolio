import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  header {
    font-size: 58px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    color: #ffce00;
  }

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
`;
