import React from 'react';
import styled from 'styled-components';
import ImgLego from '../Images/Lego-2.png';
import ImgCircle from '../Images/oval.png';
import Carousels from './Carousels';
const Background = styled.div`
  @media screen and (max-width: 400px) {
    padding-top: 0;
  }
  max-height: 591px;
  padding-top: 36px;

  width: 100%;
  background-color: #eebece;
`;

const TextDefinitionContainer = styled.h3`
@media screen and (max-width: 400px) {
  font-size: 16px;
 }
  font-weight: bold;
  font-size: 23px;
  color: #0b24fb;
  display: inline;
`;
const WeekendTeamText = styled.div`
  max-width: 721px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  font-family: WorkSans;
  font-size: 23px;
  font-weight: 600;
  font-stretch: normal;
  font-style: italic;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: white;
`;
const Paragraph = styled.div`
  @media screen and (max-width: 400px) {
    font-size: 16px;
    padding-top: 36px;
  }
  padding-left: 30px;
  padding-right: 30px;

  font-family: WorkSans;
  font-size: 22px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.52;
  letter-spacing: -0.75px;
  text-align: right;
  color: #000000;
`;

const ParagraphContainer = styled.div`
  max-width: 721px;
  max-height: 265px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;
const ImageLego1 = styled.img`
}
  display: block;
  object-fit: contain;
  margin-left: auto;
`;

const ImageCircle = styled.img`
@media screen and (max-width: 400px) {
 margin-left: 57px;
}
  display: block;
  object-fit: contain;
  margin-right: auto;
  margin-top: 38px;
  margin-left: 283px;
`;

const StepTitle1 = styled.h2`
@media screen and (max-width: 400px) {
  margin-left: 32px;
  margin-top: -30px;
  // margin-top: 220px;
  text-align: left;
}
  width: 188px;
  height: 38px;
  margin-left: auto;
  margin-right: auto;
  z-index: 3;
  margin-top: -30px;
  margin-bottom: 55px;
  text-shadow: 0 20px 30px rgba(249, 131, 171, 0.7);
  font-family: WorkSans;
  font-size: 32px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: white;
`;
function Definition() {
  return (
    <Background>
      <ImageLego1 src={ImgLego} />
      <ParagraphContainer>
        <Paragraph>
          <TextDefinitionContainer>Definition; </TextDefinitionContainer>a
          practice or exercise to test or improve one's fitness for athletic
          competition, ability, or performance to exhaust (something, such as a
          mine) by working to devise, arrange, or achieve by resolving
          difficulties. Merriam-Webster.com Dictionary.
        </Paragraph>
      </ParagraphContainer>
      <WeekendTeamText>- weekend team</WeekendTeamText>
      <ImageCircle src={ImgCircle} />
      <StepTitle1>Testimonial</StepTitle1>

      <Carousels />
    </Background>
  );
}

export default Definition;
