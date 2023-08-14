// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import RMF from "../../assets/img/rmf.png";
import RockF from "../../assets/img/rockfitness.png";
import { Link } from "react-router-dom";
import Buttons from "../buttons";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  // const [show, setShow] = useState(false);

  // const handleShow = () => {
  //   setShow(!show);
  // };

  return (
    <nav className="nav w-full">
      <div className="nav__div container flex items-center justify-between pad-main py-[28px]">
        <div className="flex items-center gap-8">
          <img src={RMF} alt="rockfitness logo" />
          <img src={RockF} alt="rockfitness logo" />
        </div>
        <div className="nav__div-link flex items-center gap-8">
          <Link className="nav__div-link-item capitalize header__1 ">
            About us
          </Link>
          <Link className="nav__div-link-item nav__div-link-cat capitalize header__1 flex gap-2 items-center">
            Category
            <div>
              <ChevronDown size={18} />
            </div>
            <div className="nav__div-link-dropdown">
              <div className="nav__div-link-dropdown-container">
                <Link className="header__1 black">Men</Link>
                <Link className="header__1 black">Women</Link>
                <Link className="header__1 black">Accessories</Link>
              </div>
            </div>
          </Link>
          <Link className="nav__div-link-item capitalize header__1 ">
            Contact us
          </Link>
          <Link className="nav__div-link-item capitalize header__1 ">Cart</Link>
        </div>
        <div className="nav__div-link flex items-center gap-8">
          <Link className="nav__div-link-item capitalize header__1 ">
            login
          </Link>
          <Buttons color={"gold"} type={"link"} to={"/"}>
            get started
          </Buttons>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
