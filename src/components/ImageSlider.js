import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
    const settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

  return (
  <Carousel {...settings}>
      <Wrap>
         <img src="/images/slider-badag.jpg" />
      </Wrap>
      <Wrap>
         <img src="/images/slider-badging.jpg" />
      </Wrap>
      <Wrap>
         <img src="/images/slider-scale.jpg" />
      </Wrap>
      <Wrap>
         <img src="/images/slider-scales.jpg" />
      </Wrap>
      
  </Carousel>
  );
}

export default ImageSlider;


const Carousel = styled(Slider)`
    
    left: 0;
    right:0;
    margin-top:20px;
    width: 100%;
    height: 100%;

    ul li button{
        &:before{
            font-size10px;
            color: rgb(150, 150, 170);
        }
    }

    li.slick-active button:before{
        color: white;
    }

    .slick-list{
        overflow: visible;
    }

    button {
        z-index: 1;
    }
`
const Wrap = styled.div`
cursor: pointer;
    img{
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border: 4px solid transparent;
        transition-duration: 300ms;


        &:hover{
            border: 4px solid rgba(249,249,249,0.8)
        }
    }
`