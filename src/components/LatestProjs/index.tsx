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
  Box,
} from './styles';
import api from '../../services/api';

interface Repository {
  id: string;
  name: string;
  description: string;
  language: string;
  html_url: string;
}

const LatestProjs: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    api
      .get('/repos', {
        params: {
          sort: 'pushed',
        },
      })
      .then(response => {
        const repos = response.data.filter(
          (repository: Repository) => repository.name !== 'galdinoallan',
        );
        setRepositories(repos);
      });
  }, []);

  return (
    <Box>
      <Container>
        <Title id="latestprojs">Latest Projects</Title>
        <Subtitle>
          Here are some of my works linked to my GitHub repositories
        </Subtitle>
      </Container>

      <Repositories>
        {repositories &&
          repositories.map(repository => (
            <Repository
              key={repository.id}
              href={repository.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
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
    </Box>
  );
};

export default LatestProjs;
