import React from 'react';
import Header from '../../components/Header';
import Hello from '../../components/Hello';
import AboutMe from '../../components/AboutMe';
import Skills from '../../components/Skills';
import LatestProjs from '../../components/LatestProjs';
import WorkXp from '../../components/WorkXp';
import Formation from '../../components/Formation';
import ContactFooter from '../../components/Contact';
import { Box } from './styles';

const Portfolio: React.FC = () => {
  return (
    <Box>
      <Header />
      <Hello />
      <AboutMe />
      <Skills />
      <LatestProjs />
      <WorkXp />
      <Formation />
      <ContactFooter />
    </Box>
  );
};

export default Portfolio;
