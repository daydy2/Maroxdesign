// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as ShoppingCart } from "../../assets/icons/shopping-cart.svg";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
const ProductCard = ({ img, name, color, price }) => {
  return (
    <div className="productCard">
      <div className="productCard__div-container">
        <div className="productCard__div-img">
          <img src={img} alt={name} />
        </div>
        <div className="flex flex-col gap-4 mt-5">
          <p className="p7 black">{name}</p>
          <p className="p7 black">{color}</p>
          <p className="p5 black">{price}</p>
        </div>
        <div className="flex items-center justify-between mt-5">
          <Link className="flex gap-3 items-center bg-white rounded-2xl py-2 px-4">
            <span>Add to cart</span>
            <ShoppingCart />
          </Link>
          <Link className="flex justify-center items-center bg-white rounded-2xl py-2 px-4 ">
            <Heart />
          </Link>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  img: PropTypes.any,
  name: PropTypes.string,
  color: PropTypes.string,
  price: PropTypes.string,
};

export default ProductCard;
