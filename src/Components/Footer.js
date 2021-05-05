import React from 'react';
import styled from 'styled-components';
import LegoImg from '../Images/Lego-3.png';

const ImageLego = styled.img`
  @media only screen and (max-width: 400px) {
    margin-top: 141px;
  }
  margin-top: -84px;
  object-fit: contain;
  margin-right: auto;
`;

const FooterBg = styled.div`
  height: 67px;
  background-color: #0b24fb;
`;

const ContainerText = styled.div`
  display: inline;
  vertical-align: middle;
`;
const WeekendText = styled.h3`
  @media screen and (max-width: 400px) {
    padding-left: 32px;
  }
  width: 98px;
  height: 19px;
  padding-top: 24px;
  padding-left: 213px;
  font-family: WorkSans;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: white;
  display: inline-block;
  vertical-align: middle;
`;
const YearText = styled.h3`
  display: Inline;
  font-family: WorkSans;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: white;
`;

const VersionType = styled.div`
  @media screen and (max-width: 400px) {
    margin-right: 32px;
  }
  float: right;
  margin-right: 213px;
  margin-top: 22px;
  width: 126px;
  font-family: WorkSans;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: white;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
`;
function Footer() {
  return (
    <div>
      <ImageLego src={LegoImg} />
      <FooterBg>
        <ContainerText>
          <WeekendText>
            wknd<YearText>@2020</YearText>
          </WeekendText>
          <VersionType>alpha version 0.1</VersionType>
        </ContainerText>
      </FooterBg>
    </div>
  );
}

export default Footer;
