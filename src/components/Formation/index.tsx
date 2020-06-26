import React from 'react';
import { Container, Title, Formations, Content } from './styles';

import ifspLogo from '../../assets/ifspLogo.png';

const Formation: React.FC = () => (
  <>
    <Container>
      <Title id="formation">Formation</Title>
    </Container>
    <Content>
      <Formations>
        <div>
          <strong>January 2018 - now</strong>
          <h1>System Analysis and Development</h1>
          <p>IFSP - Instituto Federal de São Paulo</p>
          <img src={ifspLogo} alt="Logo IFSP" />
        </div>
      </Formations>
      <Formations>
        <div>
          <strong>May 2020 - now</strong>
          <h1>GoStack Bootcamp</h1>
          <p>Rocketseat</p>
          <img
            src="https://rocketseat.com.br/static/images/logo-rocketseat.svg"
            alt="Logo Rocketseat"
          />
        </div>
      </Formations>
    </Content>
  </>
);

export default Formation;
