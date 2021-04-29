import React from 'react';
import styled from 'styled-components';
import Icon1 from '../Images/bitmap.png';
const BackgroundContainer = styled.div`
  background-color: white;
  height: 67px;
`;
const IconContainer = styled.div``;

const Icon = styled.img`
  width: 33px;
  height: 33px;
  margin: 17px 12px 17px 213px;
  object-fit: contain;
`;

const GreetingsText = styled.h3`
  padding: 12px;
  font-size: 12px;
  font-weight: 300;
  display: inline-block;
`;

const Name = styled.h2`
  font-size: 12px;
  font-weight: 500;
`;
function Header() {
  return (
    <BackgroundContainer>
      <Icon src={Icon1} />
      <GreetingsText>
        Good Morning
        <Name>Fellas</Name>
      </GreetingsText>
    </BackgroundContainer>
  );
}

export default Header;
