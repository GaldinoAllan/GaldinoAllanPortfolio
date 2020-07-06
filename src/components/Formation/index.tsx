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
        href="https://drive.google.com/file/d/16A-LpuQqq_VmKPDQcgDnS418s6D1lYlk/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <strong>Feb 2020 - Jul 2020</strong>
          <h1>GoStack Bootcamp</h1>
          <p>Rocketseat</p>
          <img
            src="https://rocketseat.com.br/static/images/logo-rocketseat.svg"
            alt="Logo Rocketseat"
          />
        </div>
      </Formations>
    </Content>
  </Box>
);

export default Formation;
