import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { Container, Title, Today, Box, Background, Content } from './styles';

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
    <Content>
      <Box id="aboutme">
        <Container>
          <Today>{`${weekDay[dayWeek]} ${day} ${months[month]}`}</Today>
          <div>
            <Title>About Me</Title>
            <a
              href={process.env.REACT_APP_RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Resume</p>
              <FiDownload />
            </a>
          </div>
          <p>
            I’m Allan. I live in Campinas, State of São Paulo, Brazil. While
            growing up I always had a connection with tech, so I decided to do
            it for a living, and started studying about being a developer when I
            realised that I wanted to develop apps, so now I am a mobile
            developer with enough skills to be considered a frontend developer
            too. I’m also really into coffee, photography and traveling. I
            promise if you give me a chance I will make you at least smile and
            if you let me I can make you laugh really loud.
          </p>
        </Container>
        <Background />
      </Box>
    </Content>
  );
};

export default Hello;
