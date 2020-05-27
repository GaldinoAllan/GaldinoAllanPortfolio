import React from 'react';
import { Container, Title, Today, Box } from './styles';
import AboutMe from '../../assets/aboutMe.svg';

const Hello: React.FC = () => {
  const date: Date = new Date();

  const dayWeek = date.getDay();
  const month = date.getMonth();
  const day = date.getDate();

  const weekDay = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
  ];

  const months = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER',
  ];

  return (
    <Box id="aboutme">
      <Today>{`${weekDay[dayWeek]} ${day} ${months[month]}`}</Today>
      <Title>About Me</Title>
      <Container>
        <p>
          I’m Allan. I live in Campinas, State of São Paulo, Brazil. While
          growing up I always had a connection with tech, so I decided to do it
          for a living, and started studying about being a developer when I
          realised that I wanted to develop apps, so now I am a mobile developer
          with enough skills to be considered a frontend developer too. I’m also
          really into coffee, photography and traveling. I promise if you give
          me a chance I will make you at least smile and if you let me I can
          make you laugh really loud.
        </p>
        <img src={AboutMe} alt="AboutMe" />
      </Container>
    </Box>
  );
};

export default Hello;
