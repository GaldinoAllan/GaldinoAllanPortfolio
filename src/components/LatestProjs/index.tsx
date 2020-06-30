import React, { useState, useEffect } from 'react';
import {
  Container,
  Title,
  Subtitle,
  Repositories,
  Repository,
  RepoLanguage,
  RepoHeader,
  RepoName,
  Description,
} from './styles';
import api from '../../services/api';

interface Repository {
  name: string;
  description: string;
  language: string;
  html_url: string;
}

const LatestProjs: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    api.get('/repos').then(response => {
      setRepositories(response.data);
    });
  }, []);

  return (
    <>
      <Container>
        <Title id="latestprojs">Latest Projects</Title>
        <Subtitle>
          Here are some of my works linked to my GitHub repositories
        </Subtitle>
      </Container>

      <Repositories>
        {repositories &&
          repositories.map(repository => (
            <Repository href={repository.html_url}>
              <RepoHeader>
                <RepoName>{repository.name}</RepoName>
                <RepoLanguage>{repository.language}</RepoLanguage>
              </RepoHeader>

              <Description>
                <strong>Description</strong>
                <p>{repository.description}</p>
              </Description>
            </Repository>
          ))}
      </Repositories>
    </>
  );
};

export default LatestProjs;
