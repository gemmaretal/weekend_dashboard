import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import BgImage1 from '../Images/bg-1.png';
import BgImage2 from '../Images/bg-1@2x.png';
import Icon1 from '../Images/Lego-1.png';
const Background = styled.div`
  height: 768px;

  width: 100%;
  overflow: hidden;
  background-color:#eebece;
`;

const Header1 = styled.h1`
  height: 51px;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  //   font-family: WorkSans;
  font-size: 68px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.82;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
`;
const Header2 = styled.h2`
  width: 338px;
  height: 25px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  //   font-family: WorkSans;
  font-size: 21px;
  font-weight: 600;
  font-stretch: normal;
  font-style: italic;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
`;
const ImageLego1 = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 67px;
  object-fit: contain;
`;


function Home() {
  return (
    <Background>
      <Header1>WEEKEND FROM HOME</Header1>
      <Header2>Stay active with a little workout</Header2>
      <ImageLego1 src={Icon1} />
    </Background>
  );
}

export default Home;
