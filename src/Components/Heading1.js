import React, { useRef } from 'react';
import styled from 'styled-components';
import Definition from './Definition';
import BgImage1 from '../Images/bg-1.png';
import Icon1 from '../Images/Lego-1.png';

const Background = styled.div`
  @media screen and (max-width: 400px) {
    height: 600px;
  }
  height: 667px;
  width: 100%;
  overflow: hidden;
  background-color: #eebece;
`;

const BackgroundImage = styled.div`
  object-fit: cover;
  overflow: hidden;
  margin-top: -67px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background: url(${BgImage1});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const Overlay = styled.div`
  @media screen and (max-width: 400px) {
    height: 667px;
  }
  background-color: rgb(0 0 0 / 0%);
  width: 100%;
  height: 730px;
  overflow: hidden;
`;
const Header1 = styled.div`
  @media screen and (max-width: 400px) {
    font-size: 52px;
    max-height: 102px;
  }
  max-height: 51px;
  left: 0;
  right: 0;
  max-width: 800px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 151px;
  margin-bottom: 20px;
  font-family: WorkSans;
  font-size: 62px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.82;
  letter-spacing: normal;
  text-align: center;
  color: white;
`;
const Header2 = styled.div`
  @media screen and (max-width: 400px) {
    font-size: 16px;
  }
  max-width: 338px;
  left: 0;
  right: 0;
  max-height: 25px;
  margin-left: auto;
  margin-right: auto;
  font-family: WorkSans;
  font-size: 21px;
  font-weight: 600;
  font-stretch: normal;
  font-style: italic;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: white;
`;
const ImageLego1 = styled.img`
  display: block;
  object-fit: contain;
  margin-left: auto;
  margin-right: auto;
  margin-top: 67px;
`;

const LetsgoButton = styled.button`
  @media screen and (max-width: 400px) {
    :active {
      border-color: white;
      background-color: #ff8787;
      box-shadow: 0 5px #666;
      transform: translateY(4px);
    }
  }
  z-index: 5;
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: -105px;
  padding-top: 20px;
  padding-bottom: 19px;
  padding-left: 83.5px;
  padding-right: 83.5px;
  text-align: center;
  font-weight: 500;
  font-family: WorkSans;
  font-size: 18px;
  border-style: solid;
  border-color: white;
  border-radius: 50px;
  background-color: white;
  color: black;
  transition-duration: 0.4s;
  cursor: pointer;
  :hover {
    color: #ffffff;
    border-color: white;
    background-color: #ff8787;
    z-index: 5;
    cursor: pointer;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  :active {
    background-color: white;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

function Heading1() {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <div>
      <Background>
        <BackgroundImage src={BgImage1}>
          <Overlay>
            <Header1>WEEKEND FROM HOME</Header1>
            <Header2>Stay active with a little workout</Header2>

            <ImageLego1 src={Icon1} />
            <LetsgoButton onClick={executeScroll}>Let's Go</LetsgoButton>
            {/* <StyledButton>Let's Go</StyledButton> */}
          </Overlay>
        </BackgroundImage>
      </Background>
      <Definition refProps={myRef} />
    </div>
  );
}

export default Heading1;
