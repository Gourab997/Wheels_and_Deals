import React from "react";
import { Carousel } from "react-bootstrap";

const TopBanner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://i.ibb.co/xsDm3gq/wallpapertip-black-jaguar-car-hd-366598.jpg'
            alt='First slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://i.ibb.co/0VpBZkN/Low-angle-shot-headlight-modern-car-min.jpg'
            alt='Second slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://i.ibb.co/jHdWm3Z/Evgeny-tchebotarev-aiwu-Lj-LPFn-U-unsplash.jpg'
            alt='Third slide'
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TopBanner;
