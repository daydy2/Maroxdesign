// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Buttons = ({ color, to, disable, children, type, ...rest }) => {
  return (
    <>
      {type === "btn" ||
        (type === "submit" && (
          <button
            disabled={disable}
            className={`btn btn__default header__2 ${
              disable ? "btn-disable" : ``
            } ${`btn__${color}`} `}
            {...rest}
          >
            {children}
          </button>
        ))}
      {type === "link" && (
        <Link
          to={disable ? null : to}
          className={`btn btn__default header__2 ${
            disable ? "btn-disable" : ``
          } ${`btn__${color}`}`}
          {...rest}
        >
          {children}
        </Link>
      )}
    </>
  );
};

Buttons.propTypes = {
  color: PropTypes.string,
  to: PropTypes.string,
  disable: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.string,
};
export default Buttons;
