// eslint-disable-next-line no-unused-vars
import React from "react";
import Buttons from "../component/buttons";
import Intro from "../assets/img/intro-1.png";
import About1 from "../assets/img/about-1.png";
import About2 from "../assets/img/about-2.png";
import About3 from "../assets/img/about-3.png";
import About4 from "../assets/img/about-4.png";
import { ReactComponent as Medal } from "../assets/icons/medal.svg";
import { ReactComponent as Truck } from "../assets/icons/truck.svg";
import { ReactComponent as Headphone } from "../assets/icons/headphone.svg";
const Homepage = () => {
  return (
    <main className="homepage">
      <section className="homepage__section-intro pad-main py-[100px]">
        <div className="homepage__div-intro-container grid-2 ">
          <div className="homepage__div-intro-left flex items-center justify-center">
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
                  <Buttons color={"gold"} type={"link"} to={"/"}>
                    Shop Women
                  </Buttons>
                </div>
                <div>
                  <Buttons color={"gold"} type={"link"} to={"/"}>
                    Shop Men
                  </Buttons>
                </div>
              </div>
            </div>
          </div>
          <div className="homepage__div-intro-right flex justify-end">
            <img src={Intro} alt="intro" className="" />
          </div>
        </div>
      </section>

      <section className="homepage__section-collection pad-main">
        <div className="homepage__div-collection-container grid-2 gap-6">
          <div className="homepage__div-collection-left flex flex-col justify-between pt-[80px] pb-6">
            <h2 className="header__6 white pl-1">Men’s Collection</h2>
            <div className="w-[25%] pl-4">
              <Buttons color={"neutral"} type={"link"} to={"/"}>
                Shop now
              </Buttons>
            </div>
          </div>
          <div className="homepage__div-collection-right flex flex-col justify-between pt-[80px] pb-6">
            <h2 className="header__6 white pl-1">Women’s Collection</h2>
            <div className="w-[25%] pl-4 ">
              <Buttons color={"neutral"} type={"link"} to={"/"}>
                Shop now
              </Buttons>
            </div>
          </div>
        </div>
      </section>

      <section className="homepage__section-about">
        <div className="homepage__div-about-container grid-2 gap-6 pad-main py-[100px]">
          <div className="homepage__div-about-left flex">
            <div className="homepage__div-about-left-text w-[85%] self-center">
              <h3 className="black header__7">About us</h3>
              <p className="vampire-grey p1">
                At Rockme, we believe that your performance is a refection of
                your gear, that is why we have curated a collection of
                handpicked premium sportswear that combines style, functionality
                and durability tailored to enhance your performance in every
                game and work out.
              </p>
              <div className="w-[25%] mt-5">
                <Buttons color={"gold"} type={"link"} to={"/"}>
                  Get Started
                </Buttons>
              </div>
            </div>
          </div>
          <div className="homepage__div-about-right gap-0 grid-2">
            <img src={About1} alt="exercising ladies" className="img-rapid" />
            <img src={About2} alt="exercising ladies" className="img-rapid" />
            <img src={About3} alt="exercising ladies" className="img-rapid" />
            <img src={About4} alt="exercising ladies" className="img-rapid" />
          </div>
        </div>
      </section>

      <section className="homepage__section-info">
        <div className="homepage__section-info-container pad-main">
          <header className="w-[70%] mx-auto">
            <h3 className="black header__7 text-center">
              Why you should shop with us
            </h3>
            <p className="p1 vampire-grey text-center">
              At Rockme, we give you the best and finest fittings to showcase
              your physique and our clients satisfaction is our number one
              priority.
            </p>
          </header>
          <div className="homepage__div-info-body flex justify-between mt-16">
            <div className="flex flex-col gap-3 items-center w-[350px]">
              <Medal />
              <p className="p5 black header text-center">Premium products</p>
              <p className="p1 vampire-grey text-center">
                We provide you with nothing but the absolute best quality
                products
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center w-[350px]">
              <Truck />
              <p className="p5 black header text-center">Speedy Delivery</p>
              <p className="p1 vampire-grey text-center">
                We provide you with nothing but the absolute best quality
                products
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center w-[350px]">
              <Headphone />
              <p className="p5 black header text-center">
                Exceptional customer service
              </p>
              <p className="p1 vampire-grey text-center">
                We provide you with nothing but the absolute best quality
                products
              </p>
            </div>
          </div>
        </div>
      </section>

      section.
    </main>
  );
};

export default Homepage;
