import React from 'react';
import { Container } from './styles';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size} id="top">
    <header>
      GaldinoAllan
      <nav>
        <a href="#aboutme">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#latestprojs">Latest Projects</a>
        <a href="#workxp">Work Experience</a>
        <a href="#formation">Formation</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  </Container>
);

export default Header;
