// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const ProductCat = ({ title, children }) => {
  return (
    <section className="productcat">
      <div className="productcat__div-container">
        <header className="flex justify-between items-center mb-4">
          <p className="p6 black capitalize">{title}</p>
          <p className="p7 black">View all</p>
        </header>
        <div className="productcat__div-body gap-[30px] grid-3 ">
          {children}
        </div>
      </div>
    </section>
  );
};

ProductCat.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default ProductCat;
