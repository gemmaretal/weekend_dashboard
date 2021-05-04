import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.less';
import 'slick-carousel/slick/slick-theme.less';

const StyledSlider = styled(Slider)`
  .slick-slide > div {
    margin: 0 5px;
  }
  .slick-list {
    margin: 0 10px;
  }

  .slick-prev {
    left: -70px !important;
    z-index: 1;
  }
  .slick-next {
    right: -45px !important;
    z-index: 1;
  }
`;
const Bg = styled.div`
  @media only screen and (max-width: 400px) {
    padding-left: 32px;
    padding-right: 0px;
    margin-top: -60px;
    width: 381px;
    height: 194px;
    overflow: hidden;
  }
  padding-left: 70px;
  padding-right: 45px;
  margin-top: -50px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(0 0 0 / 0%);
  // background-color: grey;
  width: 686px;
  height: 194px;
  overflow: hidden;
`;
const TestiContainer = styled.div`
  margin-top: 25px;
  height: 140px;
  width: 247px;
  background: #ffffff;

  overflow: hidden;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
`;
const TestiText = styled.div`
  font-size: 12px;
  font-family: WorkSans;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.43px;
  color: #000000;

  margin-bottom: 20px;
  margin-right: 20px;
  margin-left: 20px;
`;

const TestiCreator = styled.div`
  margin: 20px 20px 20px;
  font-family: WorkSans;
  font-size: 32px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
`;

function Carousels() {
  const [eventsData, setEventsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          'https://wknd-take-home-challenge-api.herokuapp.com/testimonial'
        );
        setEventsData(result.data);
      } catch (error) {
        alert(`Error ${error}`);
      }
    };
    fetchData();
  }, []);

  var settings = {
    variableWidth: true,
    dots: false,
    infinite: false,
    initialSlide: 0,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,

          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Bg>
      <StyledSlider {...settings}>
        {eventsData.map((eventsData, index) => {
          return (
            <div key={index}>
              <TestiContainer>
                <TestiCreator>{eventsData.by}</TestiCreator>
                <TestiText>{eventsData.testimony}</TestiText>
              </TestiContainer>
            </div>
          );
        })}
      </StyledSlider>
    </Bg>
  );
}

export default Carousels;
