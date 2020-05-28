import React from 'react';
import { Container, Title, Techs } from './styles';
import JavaScript from '../../assets/js-logo.svg';
import TypeScript from '../../assets/ts-logo.svg';
import Swift from '../../assets/swift-logo.svg';
import ReactJS from '../../assets/react-logo.svg';
import Node from '../../assets/node-logo.svg';
import Firebase from '../../assets/firebase-logo.png';
import htmlLogo from '../../assets/html-logo.png';
import CSS from '../../assets/css-logo.png';
import Python from '../../assets/python-logo.png';

const Skills: React.FC = () => (
  <Container>
    <Title id="skills">Skills</Title>
    <Techs>
      <a href="/">
        <img src={TypeScript} alt="ts-logo" />
        <p>TypeScript</p>
      </a>
      <a href="/">
        <img src={JavaScript} alt="js-logo" />
        <p>JavaScript</p>
      </a>
      <a href="/">
        <img src={Swift} alt="Swift-logo" />
        <p>Swift</p>
      </a>
      <a href="/">
        <img src={ReactJS} alt="react-logo" />
        <p>ReactJS</p>
      </a>
      <a href="/">
        <img src={Node} alt="node-logo" />
        <p>Node.js</p>
      </a>
      <a href="/">
        <img src={htmlLogo} alt="node-logo" />
        <p>HTML 5</p>
      </a>
      <a href="/">
        <img src={Python} alt="node-logo" />
        <p>Python</p>
      </a>
      <a href="/">
        <img src={Firebase} alt="node-logo" />
        <p>Firebase</p>
      </a>
      <a href="/">
        <img src={CSS} alt="node-logo" />
        <p>CSS 3</p>
      </a>
    </Techs>
  </Container>
);

export default Skills;
