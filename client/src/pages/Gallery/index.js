import React from 'react';
import Icon1 from '../../images/gallery1.jpg';
import Icon2 from '../../images/gallery2.jpg';
import Icon3 from '../../images/gallery3.jpg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './GalleryElements';

const Services = () => {
  return (
    <ServicesContainer id='gallery'>
      <ServicesH1>Gallery</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Catch Waves</ServicesH2>
         
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Surfboard</ServicesH2>
        
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Surfing</ServicesH2>
          
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;