import React from 'react';
import { Container } from './styles';
import fotoMinha from '../../assets/fotoMinha.svg';

const Hello: React.FC = () => (
  <Container>
    <img src={fotoMinha} alt="Allan Galdino" />
    <div>
      <p>Hello,</p>
      <strong>I&apos;m Allan</strong>
      <p>mobile & frontend developer</p>
    </div>
  </Container>
);

export default Hello;
