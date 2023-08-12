// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
// import gifImage from '../path/to/your/gif/image.gif';
// import './ParallaxGif.css';
import PropTypes from "prop-types";

const ParallaxGif = ({ gifImage = "" }) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxStyles = {
    backgroundImage: `url(${gifImage})`,
    transform: `translateY(${scrollY * 0.5}px)`, // Adjust the factor as needed
  };

  return (
    <div className="parallax-container">
      <div className="parallax-image" style={parallaxStyles}></div>
      {/* Other content */}
    </div>
  );
};
ParallaxGif.propTypes = {
  gifImage: PropTypes.string,
};
export default ParallaxGif;
