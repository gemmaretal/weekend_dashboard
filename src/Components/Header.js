import React from 'react';
import styled from 'styled-components';
import Icon1 from '../Images/bitmap.png';
const BackgroundContainer = styled.div`
  background-color: white;
  height: 67px;
`;
const IconContainer = styled.div`
@media screen and (max-width: 400px) {
  margin-left: 32px;
}
  margin-left: 213px;
`;

const Icon = styled.img`
  width: 33px;
  height: 33px;
  margin-top: 17px;
  margin-right: 10px;
`;

const GreetingsText = styled.div`
  padding-top: 10px;
  font-size: 12px;
  font-weight: 300;
  display: inline-grid;
`;

const Name = styled.div`
  font-size: 12px;
  font-weight: 500;
`;
function Header() {
  return (
    <BackgroundContainer>
      <IconContainer>
        <Icon src={Icon1} />
        <GreetingsText>
          Good Morning<Name>Fellas</Name>
        </GreetingsText>
      </IconContainer>
    </BackgroundContainer>
  );
}

export default Header;
