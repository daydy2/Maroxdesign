// eslint-disable-next-line no-unused-vars
import React from "react";
import Buttons from "../buttons";
import { IntroCarousel } from "../../page/Homepage";
import PropTypes from "prop-types";

const IntroPage = ({ children }) => {
  return (
    <div className="intropage__div-intro-container grid-2 ">
      <div className="intropage__div-intro-left flex items-center justify-center">
        <div>
          <h1 className="header__5 black-red">
            GEAR UP AND DOMINATE YOUR ACTIVE LIFESTYLE WITH OUR PREMIUM
            SPORTSWEAR.
          </h1>
          <p className="p4 vampire-grey">
            Shop the finest collection of sportswear and accessories at
            unbeatable prices
          </p>

          <div className="flex items-center gap-3 mt-6">
            <div>
              <Buttons color={"gold"} type={"link"} to={"/women"}>
                Shop Women
              </Buttons>
            </div>
            <div>
              <Buttons color={"gold"} type={"link"} to={"/men"}>
                Shop Men
              </Buttons>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="intropage__div-intro-right flex justify-end"> */}
      <IntroCarousel>{children}</IntroCarousel>
      {/* </div> */}
    </div>
  );
};

IntroPage.propTypes = {
  children: PropTypes.node,
};
export default IntroPage;
