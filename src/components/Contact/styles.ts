import styled from 'styled-components';

export const Footer = styled.footer`
  bottom: 20px;
  margin-top: 40px;
  margin-bottom: 20px;
  border-top: 2px solid #707070;
`;

export const FooterHeader = styled.div`
  margin-top: -40px;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 80px;
    height: 80px;
    display: table-cell;
    border-radius: 50%;
    background: #707070;
    vertical-align: middle;
  }

  a {
    text-align: center;
    color: #1a1a1a;
    font-weight: black;
    text-decoration: none;
    font-size: 30px;
    transition: opacity 0.2s;

    &:hover {
      color: #000;
    }

    p {
      padding-top: 22px;
      justify-content: center;
      display: flex;
    }
  }
`;

export const FooterInfos = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 60px;
  font-weight: black;
`;

export const Contact = styled.div`
  margin-left: 50px;

  div {
    display: flex;
    margin-top: 20px;
  }

  p {
    color: #707070;
    padding-left: 10px;
    font-size: 36px;
  }
`;

export const Follow = styled.div`
  margin: 20px;

  strong {
    font-size: 47px;
    margin-right: 50px;
    color: #ffce00;
  }

  div {
    margin-top: 70px;

    a {
      color: #ffce00;
      text-decoration: none;
      font-size: 16px;
      transition: opacity 0.2s;

      & + a {
        margin-left: 50px;
      }

      &:hover {
        color: #000;
      }
    }
  }
`;
