// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Buttons from "../component/buttons";
import Intro from "../assets/img/intro-1.png";
import Intro2 from "../assets/img/intro-2.png";
import Intro3 from "../assets/img/intro-3.png";
import Intro4 from "../assets/img/intro-4.png";
import Intro5 from "../assets/img/intro-5.png";
import About1 from "../assets/img/about-1.png";
import About2 from "../assets/img/about-2.png";
import About3 from "../assets/img/about-3.png";
import About4 from "../assets/img/about-4.png";
import MenSport from "../assets/img/men-sport.png";
import { ReactComponent as Medal } from "../assets/icons/medal.svg";
import { ReactComponent as Truck } from "../assets/icons/truck.svg";
import { ReactComponent as Headphone } from "../assets/icons/headphone.svg";
import Bra from "../assets/img/bra.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProductCard from "../component/cards/ProductCard";
import CarouselContainer from "../component/common/Carousel/Carousel";
import Feedback from "../component/common/Feedback";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
          {/* <div className="homepage__div-intro-right flex justify-end"> */}
          <IntroCarousel>
            <img src={Intro} alt="intro" className="" />
            <img src={Intro2} alt="intro" className="" />
            <img src={Intro3} alt="intro" className="" />
            <img src={Intro4} alt="intro" className="" />
            <img src={Intro5} alt="intro" className="" />
          </IntroCarousel>
          {/* </div> */}
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

      <section className="homepage__section-about py-[100px]">
        <div className="homepage__div-about-container grid-2 gap-6 pad-main ">
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

      <section className="homepage__section-parallax py-[100px]">
        <div
          className="homepage__div-parallax-container px-14 pt-52"
          // style={parallaxStyles}
        >
          <h2 className="header__8 white w-[65%]">
            We provide you with comfortable sports bras to enhance maximum
            performance.
          </h2>
        </div>
      </section>

      <section className="homepage__section-categories">
        <div className="homepage__div-categories-container">
          <header className="pad-main mb-6">
            <h3 className="p6 black">Categories</h3>
          </header>
          <div className="homepage__div-categories-body gap-[25px] grid-3">
            <CatImg img={"/assets/intro-1.png"} text="leggings" to={"/"} />
            <CatImg img={"/assets/intro-1.png"} text="bra" to={"/"} />
            <CatImg img={"/assets/intro-1.png"} text="shorts" to={"/"} />
            <CatImg img={"/assets/intro-1.png"} text="leggings" to={"/"} />
            <CatImg img={"/assets/intro-1.png"} text="bra" to={"/"} />
            <CatImg img={"/assets/intro-1.png"} text="shorts" to={"/"} />
          </div>
        </div>
      </section>

      <section className="homepage__section-women py-[100px]">
        <div className="homepage__div-women-container">
          <header className="pad-main mb-6">
            <h3 className="p6 black">Women Top picks</h3>
          </header>
          <div className="homepage__div-women-body pl-[55px]">
            <CarouselContainer>
              <ProductCard
                img={Intro}
                name={"Durable Sports Leggings"}
                color={"Blue"}
                price={"$50.60"}
              />
              <ProductCard
                img={Intro}
                name={"Durable Sports Leggings"}
                color={"Blue"}
                price={"$50.60"}
              />
              <ProductCard
                img={Intro}
                name={"Durable Sports Leggings"}
                color={"Blue"}
                price={"$50.60"}
              />
              <ProductCard
                img={Intro}
                name={"Durable Sports Leggings"}
                color={"Blue"}
                price={"$50.60"}
              />
              <ProductCard
                img={Intro}
                name={"Durable Sports Leggings"}
                color={"Blue"}
                price={"$50.60"}
              />
              <ProductCard
                img={Intro}
                name={"Durable Sports Leggings"}
                color={"Blue"}
                price={"$50.60"}
              />
              <ProductCard
                img={Intro}
                name={"Durable Sports Leggings"}
                color={"Blue"}
                price={"$50.60"}
              />
            </CarouselContainer>
          </div>
        </div>
      </section>

      <section className="homepage__section-bra">
        <div className="homepage__div-bra-container">
          <header className="pad-main mb-6">
            <h3 className="p6 black">Women Sports Bras</h3>
          </header>
          <div className="homepage__div-bra-body pl-[55px]">
            <CarouselContainer>
              <ProductCard
                img={Bra}
                name={"Stretch Sports Bra"}
                color={"White"}
                price={"$50.60"}
              />
              <ProductCard
                img={Bra}
                name={"Stretch Sports Bra"}
                color={"White"}
                price={"$50.60"}
              />
              <ProductCard
                img={Bra}
                name={"Stretch Sports Bra"}
                color={"White"}
                price={"$50.60"}
              />
              <ProductCard
                img={Bra}
                name={"Stretch Sports Bra"}
                color={"White"}
                price={"$50.60"}
              />
              <ProductCard
                img={Bra}
                name={"Stretch Sports Bra"}
                color={"White"}
                price={"$50.60"}
              />
              <ProductCard
                img={Bra}
                name={"Stretch Sports Bra"}
                color={"White"}
                price={"$50.60"}
              />
              <ProductCard
                img={Bra}
                name={"Stretch Sports Bra"}
                color={"White"}
                price={"$50.60"}
              />
            </CarouselContainer>
          </div>
        </div>
      </section>

      <section className="homepage__section-comfort py-[100px]">
        <div className="homepage__div-comfort-container pt-60 pl-12">
          <h3 className="header__8 white w-[75%]">
            Comfortable Sports outfits helps you with better sports performance.
          </h3>
        </div>
      </section>

      <section className="homepage__section-men">
        <div className="homepage__div-men-container">
          <header className="pad-main mb-6">
            <h3 className="p6 black">Men Sports Shorts</h3>
          </header>
          <div className="homepage__div-men-body pl-[55px]">
            <CarouselContainer>
              <ProductCard
                img={MenSport}
                name={"Cotton men sport short"}
                color={"Gray"}
                price={"$50.60"}
              />
              <ProductCard
                img={MenSport}
                name={"Cotton men sport short"}
                color={"Gray"}
                price={"$50.60"}
              />
              <ProductCard
                img={MenSport}
                name={"Cotton men sport short"}
                color={"Gray"}
                price={"$50.60"}
              />
              <ProductCard
                img={MenSport}
                name={"Cotton men sport short"}
                color={"Gray"}
                price={"$50.60"}
              />
              <ProductCard
                img={MenSport}
                name={"Cotton men sport short"}
                color={"Gray"}
                price={"$50.60"}
              />
              <ProductCard
                img={MenSport}
                name={"Cotton men sport short"}
                color={"Gray"}
                price={"$50.60"}
              />
              <ProductCard
                img={MenSport}
                name={"Cotton men sport short"}
                color={"Gray"}
                price={"$50.60"}
              />
            </CarouselContainer>
          </div>
        </div>
      </section>

      <section className="homepage__section-feedback pt-[100px] pb-[300px]">
        <div className="homepage__div-feedback-container pad-main">
          <header>
            <h3 className="header__9 black text-center">
              Here’s what people are saying
            </h3>
          </header>
          <Feedback />
        </div>
      </section>
    </main>
  );
};

export default Homepage;

export const CatImg = ({ img, text = "", to = "" }) => {
  const styles = {
    background: `url(${img}), lightgray 0px -257.577px / 100% 140.561% no-repeat`,
  };
  return (
    <Link to={to} className="catImg">
      <div
        className="catImg-container flex justify-center items-center"
        style={styles}
      >
        <p className="header__3 white uppercase">{text}</p>
      </div>
    </Link>
  );
};

CatImg.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
  to: PropTypes.string,
};

export const IntroCarousel = ({ children }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 1,
      //   slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
      //   slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      //   slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition={"transform 600ms ease-in-out"}
      transitionDuration={500}
      arrows={false}
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      containerClass="carousel-intro-container"
      dotListClass="custom-dot-intro-list"
      itemClass=""
    >
      {children}
    </Carousel>
  );
};

IntroCarousel.propTypes = {
  children: PropTypes.node,
};
