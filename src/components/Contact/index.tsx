import React from 'react';
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiFacebook,
} from 'react-icons/fi';
import {
  Footer,
  Title,
  Contact,
  Follow,
  FooterInfos,
  FooterHeader,
} from './styles';

const ContactFooter: React.FC = () => {
  // const date: Date = new Date();
  return (
    <Footer id="contact">
      <FooterHeader>
        <div>
          <a href="#top">
            <p>TOP</p>
          </a>
        </div>
      </FooterHeader>

      <FooterInfos>
        <Contact>
          <Title>Contact</Title>
          <div>
            <FiMapPin size={40} color="#707070" />
            <p>Campinas, SP</p>
          </div>
          <div>
            <FiMail size={40} color="#707070" />
            <p>allan.g.galdino@outlook.com</p>
          </div>
          <div>
            <FiPhone size={40} color="#707070" />
            <p>+55 (19) 99850-1170</p>
          </div>
        </Contact>

        <Follow>
          <strong>Follow me @GaldinoAllan</strong>
          <div>
            <a
              href="https://github.com/galdinoallan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub size={64} strokeWidth={1} />
            </a>
            <a
              href="https://www.linkedin.com/in/galdinoallan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin size={64} strokeWidth={1} />
            </a>
            <a
              href="https://www.instagram.com/allan_galdino_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram size={64} strokeWidth={1} />
            </a>
            <a
              href="https://twitter.com/GaldinoAll"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter size={64} strokeWidth={1} />
            </a>
            <a
              href="https://www.facebook.com/galdinoallan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook size={64} strokeWidth={1} />
            </a>
          </div>
        </Follow>
      </FooterInfos>
    </Footer>
  );
};

export default ContactFooter;
