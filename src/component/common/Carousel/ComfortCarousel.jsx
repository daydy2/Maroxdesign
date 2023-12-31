// eslint-disable-next-line no-unused-vars
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PropTypes from "prop-types";

const ComfortCarousel = ({ children, deviceType }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={false}
      autoPlay={false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      //   customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-comfort-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-comfort-list"
      customTransition={"transform 600ms ease-in-out"}
    >
      {children}
    </Carousel>
  );
};
ComfortCarousel.propTypes = {
  children: PropTypes.node,
  deviceType: PropTypes.string,
};
export default ComfortCarousel;
