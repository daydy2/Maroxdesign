// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const ComfortCard = ({ img, text }) => {
  const styles = {
    background: `url(${img}), lightgray 0px -257.577px / 100% 140.561% no-repeat`,
  };
  return (
    <div className="comfortCard">
      <div className="comfortCard-container" style={styles}>
        <h3 className="header__8 white mt-60 ml-12">{text}</h3>
      </div>
    </div>
  );
};

ComfortCard.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
};

export default ComfortCard;
