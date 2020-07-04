import styled from 'styled-components';

export const Box = styled.div`
  padding-top: 30px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Container = styled.div`
  place-content: center;
  margin: 50px;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 60px;
  font-weight: black;
`;

export const Subtitle = styled.p`
  color: #707070;
  font-size: 24px;
  font-weight: black;
  margin-top: 10px;
`;

export const Repositories = styled.div`
  display: flex;
  margin: 8px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Repository = styled.a`
  text-decoration: none;
  color: #fff;
  border: 2px solid #707070;
  background: #707070;
  border-radius: 25px;
  margin: 16px;
  width: 320px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
    border-color: #ffce00;
  }
`;

export const RepoHeader = styled.div`
  align-items: center;
  margin: 20px;
  height: 87px;
`;

export const RepoName = styled.strong`
  color: #fff;
  font-weight: bold;
  margin-right: 20px;
  font-size: 26px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const RepoLanguage = styled.p`
  color: #d1d1d1;
  margin-top: 8px;
`;

export const Description = styled.div`
  width: 250px;
  margin: 20px;

  strong {
    font-size: 20px;
  }

  p {
    font-size: 16px;
    color: #d1d1d1;
    margin-top: 4px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`;
