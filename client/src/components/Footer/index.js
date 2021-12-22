import React from 'react';
import {
  FaGithubSquare,
  FaYoutube, 
  FaLinkedin
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
               OnWave
            </SocialLogo>
            <WebsiteRights>OnWave © 2021 All rights reserved.</WebsiteRights>
            <SocialIcons>

            <SocialIconLink 
              href='https://github.com/Zehava-Bar-Gil' 
              target='_blank' 
              aria-label='Github'
              rel='noopener noreferrer'>  
                <FaGithubSquare />
              </SocialIconLink>

              <SocialIconLink
                href='https://www.youtube.com/watch?v=qvjzYHz3ch0&list=RDCMUCnJ0mt5Cgx4ER_LhTijG_4A&index=3'
                target='_blank'
                aria-label='Youtube'
                rel='noopener noreferrer'
              >
                <FaYoutube />
              </SocialIconLink>
              
              <SocialIconLink 
              href='https://www.linkedin.com/in/zehava-bar-gil-b3152620b/' 
              target='_blank' 
              aria-label='Linkedin'
              rel='noopener noreferrer'>  
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
