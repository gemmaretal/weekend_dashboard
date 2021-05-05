import React, { useEffect } from 'react';
import styled from 'styled-components';
import HelpTips from './HelpTips';
import BeanImg from '../Images/path-3.png';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ImageBean = styled.img`
  @media only screen and (max-width: 400px) {
    display: none;
  }
  height: 195px;
  width: 159px;
  float: right;
  margin-right: 127px;
  margin-top: -235px;
`;

const BackgroundStyle = styled.div`
  @media screen and (max-width: 400px) {
    height: 2038px;
  }
  background-color: black;
  height: 1406px;
`;

const StepTitle1 = styled.h2`
  @media screen and (max-width: 400px) {
    margin-left: 32px;
    margin-top: -30px;
    text-align: left;
  }
  max-width: 188px;
  max-height: 38px;
  margin-left: auto;
  margin-right: auto;
  z-index: 3;
  padding-top: 175px;
  margin-bottom: 46px;
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

const StepTitle2 = styled.h2`
  @media screen and (max-width: 400px) {
    margin-left: 32px;
    text-align: left;
  }
  max-width: 188px;
  height: 38px;
  margin-top: 67px;
  margin-left: auto;
  margin-right: auto;
  z-index: 3;
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

const StepTitle3 = styled.h2`
  @media screen and (max-width: 400px) {
    margin-left: 32px;
    text-align: left;
  }
  width: 188px;
  height: 38px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  z-index: 3;
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
const StepTitle4 = styled.h2`
  @media screen and (max-width: 400px) {
    margin-left: 32px;
    text-align: left;
    margin-top: 67px;
  }
  width: 188px;
  height: 38px;
  margin-top: 127px;
  margin-left: auto;
  margin-right: auto;
  z-index: 3;
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

const ParagraphContainer = styled.div`
  @media screen and (max-width: 400px) {
    margin: 0 32px;
    text-align: left;
    font-size: 16px;
  }
  max-width: 619px;
  left: 0;
  right: 0;
  padding-top: 14px;
  margin-left: auto;
  margin-right: auto;
  font-family: WorkSans;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.64px;
  text-align: center;
  color: white;
`;

function StepsPage() {
  useEffect(() => {
    AOS.init({ offset: 200, delay: 50, duration: 1000 });
  }, []);
  return (
    <div>
      <BackgroundStyle>
        <StepTitle1 data-aos="fade-up">POV</StepTitle1>
        <ParagraphContainer data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </ParagraphContainer>
        <StepTitle2 data-aos="fade-up">Resource</StepTitle2>
        <ParagraphContainer data-aos="fade-up">
          These cases are perfectly simple and easy to distinguish. In a free
          hour, when our power of choice is untrammelled and when nothing
          prevents our being able to do what we like best
        </ParagraphContainer>
        <StepTitle3 data-aos="fade-up">Help & Tips</StepTitle3>
        <HelpTips />

        <ImageBean src={BeanImg} />

        <StepTitle4 data-aos="fade-up">You're all set.</StepTitle4>
        <ParagraphContainer data-aos="fade-up">
          The wise man therefore always holds in these matters to this principle
          of selection.
        </ParagraphContainer>
        <Footer />
      </BackgroundStyle>
    </div>
  );
}

export default StepsPage;
