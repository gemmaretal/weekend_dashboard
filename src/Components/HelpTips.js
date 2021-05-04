import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ArrowRightOutlined } from '@ant-design/icons';

const ImageStyled = styled.img`
  width: 100%;
  height: 176px;
`;
const ImageContainer = styled.div`
  width: 311px;
  margin-right: 10px;
  margin-top: 10px;
`;

const TextContainer = styled.div`
  z-index: 5;
  margin-top: -72px;
  position: relative;
  width: 311px;
  height: 72px;
  background-color: #00000075;
`;
const TextStyled = styled.div`
  width: 218px;
  height: 38px;
  padding-top: 17px;
  padding-left: 25px;
  display: inline-block;
  font-family: WorkSans;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.57px;
  color: white;
`;

const Container = styled.div`
  display: inline-grid;
`;

const BgStyle = styled.div`
  margin-top: 20px;
  margin-left: 25%;
  margin-right: auto;
  @media only screen and (max-width: 1366px) {
    margin-top: 20px;
    margin-left: 210px;
    margin-right: auto;
  }
  @media only screen and (max-width: 400px) {
    margin-top: 20px;
    margin-left: 32px;
    margin-right: auto;
  }
`;

const ArrowButton = styled.button`z-index: 5;
width: 32px;
height: 32px;
position: relative;
float: right;
margin-top: 20px;
margin-right:20px;
display: inline-block;
border-style: solid;
border-color:white;
border-radius: 30px;
background-color: white;
color : black;
transition-duration: 0.4s;
cursor: pointer;
:hover {
color : #ffffff;
border-color:white;
background-color: #ff8787;
position: relative;
z-index: 5;
cursor: pointer;
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
`;
function HelpTips() {
  const [eventsData, setEventsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          'https://wknd-take-home-challenge-api.herokuapp.com/help-tips'
        );
        setEventsData(result.data);
      } catch (error) {
        alert(`Error ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <BgStyle>
      {eventsData.map((eventsData, index) => {
        return (
          <Container key={index}>
            <ImageContainer>
              <ImageStyled src={eventsData.image} />
              <TextContainer>
                <TextStyled>{eventsData.title} </TextStyled>
                <ArrowButton>
                  <ArrowRightOutlined />
                </ArrowButton>
              </TextContainer>
            </ImageContainer>
          </Container>
        );
      })}
    </BgStyle>
  );
}

export default HelpTips;
