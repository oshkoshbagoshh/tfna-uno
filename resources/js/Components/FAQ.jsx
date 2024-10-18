import React from 'react';
import styled from 'styled-components';
import ThreeFirstNamesBanner from  './ThreeFirstNamesBanner';






const BannerContainer = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(45deg, #000000, #1a1a2e);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const WaveBackground = styled.div`
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  background: radial-gradient(ellipse at center, transparent 0%, transparent 50%, #00ffff 100%);
  animation: wave 15s infinite linear;
  opacity: 0.1;

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #00ffff;
  text-align: center;
  margin-bottom: 1rem;
  z-index: 1;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  color: #ffffff;
  text-align: center;
  max-width: 80%;
  z-index: 1;
`;

const ThreeFirstNamesBanner = () => {
    return (
        <BannerContainer>
            <WaveBackground />
            <Title>Three First Names & Associates</Title>
            <Subtitle>
                EMPOWERING BRANDS & AGENCIES TO STRIKE GOLD WITH CTV ADVERTISING
            </Subtitle>
        </BannerContainer>
    );]
};

export default ThreeFirstNamesBanner;
