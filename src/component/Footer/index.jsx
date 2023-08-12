// eslint-disable-next-line no-unused-vars
import React from "react";
import Buttons from "../buttons";
import FooterImg from "../../assets/img/footer-top-img.png";
import RMF from "../../assets/img/rmf.png";
import { Link } from "react-router-dom";
import { ReactComponent as Visa } from "../../assets/icons/visa.svg";
import { ReactComponent as Mastercard } from "../../assets/icons/mastercard.svg";
import { ReactComponent as Paypal } from "../../assets/icons/paypal.svg";

const Footer = () => {
  return (
    <footer className="footer pb-9">
      <section className="footer__section-top py-[113px] px-[58px] mb-[120px]">
        <div className="footer__div-text w-[60%]">
          <h3 className="ink header__3 text-left">
            Are You Ready To Take Your Sport Performance To Another Level? Shop
            With Us Now.
          </h3>
          <div className="mt-5 w-[25%]">
            <Buttons color={"gold"} type={"link"} to={"/"}>
              Shop now
            </Buttons>
          </div>
        </div>
        <div className="footer__div-text-img">
          <img src={FooterImg} alt="footer imae" />
        </div>
      </section>
      <section className="footer__section-bottom pad-main">
        <div className="footer__div-bottom-container">
          <div className="footer__div-links-container flex justify-between items-start">
            <div className="w-[35%]">
              <img src={RMF} alt="rmf logo" />
              <p className="p1 vampire-grey ">
                Lorem ipsum dolor sit amet consectetur. Libero nec at aenean sit
                donec cursus adipiscing proin. Suscipit scelerisque vivamus amet
                placerat nisi.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="black header__4">Company</h3>
              <Link className="p2 black" to={"/"}>
                About Us
              </Link>
              <Link className="p2 black" to={"/"}>
                Contact Us
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="black header__4">Categories</h3>
              <Link className="p2 black capitalize" to={"/"}>
                men
              </Link>
              <Link className="p2 black capitalize" to={"/"}>
                women
              </Link>
              <Link className="p2 black capitalize" to={"/"}>
                accessories
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="black header__4 capitalize">Payment methods</h3>
              <div className="flex gap-4 items-center">
                <Visa />
                <Mastercard />
                <Paypal />
              </div>
            </div>
          </div>
          <div className="footer__div-copyright"></div>
        </div>

        <p className="text-center p3 black mt-[100px]">
          Copyright © 2023 Rockme. All rights reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
