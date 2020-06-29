import React from 'react';
import { Container, Title, Experience, Content } from './styles';

import artLogo from '../../assets/artLogo.svg';

const WorkXp: React.FC = () => (
  <>
    <Container>
      <Title id="workxp">Work Experience</Title>
    </Container>
    <Content>
      <Experience>
        <div>
          <strong>November 2018 - now</strong>
          <h1>Sustentation</h1>
          <h4>ArtIT - Intelligent Technology</h4>
          <p>
            Support to portable phones for a Brazilian company called NET,
            performing changes directly in the production database when
            something went not according to the business rules.
          </p>
        </div>
        <img src={artLogo} alt="Logo ArtIT" />
      </Experience>
    </Content>
  </>
);

export default WorkXp;
