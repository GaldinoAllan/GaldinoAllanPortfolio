import React from 'react';
import { Container, Title, Formations, Content, Box } from './styles';

import ifspLogo from '../../assets/ifspLogo.png';

const Formation: React.FC = () => (
  <Box>
    <Container>
      <Title id="formation">Formation</Title>
    </Container>
    <Content>
      <Formations>
        <div>
          <strong>Feb 2018 - now</strong>
          <h1>System Analysis and Development</h1>
          <p>IFSP - Instituto Federal de São Paulo</p>
          <img src={ifspLogo} alt="Logo IFSP" />
        </div>
      </Formations>
      <Formations
        href={process.env.REACT_APP_GOSTACK_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <strong>Feb 2020 - Jul 2020</strong>
          <h1>GoStack Bootcamp</h1>
          <p>Rocketseat</p>
          <img
            src={process.env.REACT_APP_ROCKETSEAT_LOGO}
            alt="Logo Rocketseat"
          />
        </div>
      </Formations>
    </Content>
  </Box>
);

export default Formation;
