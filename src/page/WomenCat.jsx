// eslint-disable-next-line no-unused-vars
import React from "react";
import IntroPage from "../component/common/Intro";
import Intro from "../assets/img/intro-1.png";
import Intro2 from "../assets/img/intro-2.png";
import Intro3 from "../assets/img/intro-3.png";
import Intro4 from "../assets/img/intro-4.png";
import Intro5 from "../assets/img/intro-5.png";
import Leggings from "../assets/img/leggings.png";
import WomenLeggingsSet from "../assets/img/women-leggings-set.png";
import Joggers from "../assets/img/women-joggers.png";
import Bra from "../assets/img/women-bra.png";
import ShortSet from "../assets/img/women-short-set.png";
import ProductCat from "../component/common/ProductCat";
import ProductCard from "../component/cards/ProductCard";

const WomenCat = () => {
  return (
    <main className="womenpage">
      <section className="womenpage__section-intro pad-main py-[100px]">
        <IntroPage>
          <img src={Intro} alt="intro" className="" />
          <img src={Intro2} alt="intro" className="" />
          <img src={Intro3} alt="intro" className="" />
          <img src={Intro4} alt="intro" className="" />
          <img src={Intro5} alt="intro" className="" />
        </IntroPage>
      </section>

      <section className="womenpage__section-top">
        <div className="womenpage__div-top-container px-14 pt-[300px]">
          <h2 className="header__8 white w-[65%]">
            You put in the work, We ensure your fittings shows your physique
          </h2>
        </div>
      </section>

      <section className="women__section-leggings py-[100px]">
        <div className="women__div-leggings-container pad-main">
          <ProductCat title={"Womens Leggings "}>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <ProductCard
                key={index}
                img={Leggings}
                name={"Gs power original Tight Leggings"}
                color={"Lilac"}
                price={"$50.60"}
              />
            ))}
          </ProductCat>
        </div>
      </section>

      <section className="women__section-joggers ">
        <div className="women__div-joggers-container pad-main">
          <ProductCat title={"Womens Joggers"}>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <ProductCard
                key={index}
                img={Joggers}
                name={"Original Hoodie and pants"}
                color={"Blue"}
                price={"$50.60"}
              />
            ))}
          </ProductCat>
        </div>
      </section>

      <section className="women__section-bra py-[100px]">
        <div className="women__div-bra-container pad-main">
          <ProductCat title={"Women Sports Bras"}>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <ProductCard
                key={index}
                img={Bra}
                name={"Stretch Sports Bra"}
                color={"White"}
                price={"$50.60"}
              />
            ))}
          </ProductCat>
        </div>
      </section>

      <section className="women__section-leggins-set ">
        <div className="women__div-leggins-set-container pad-main">
          <ProductCat title={"Women Leggings set"}>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <ProductCard
                key={index}
                img={WomenLeggingsSet}
                name={"C back Bra and leggings set"}
                color={"Gray"}
                price={"$50.60"}
              />
            ))}
          </ProductCat>
        </div>
      </section>

      <section className="women__section-shorts pt-[100px] pb-[300px]">
        <div className="women__div-shorts-container pad-main">
          <ProductCat title={"Women Short set"}>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <ProductCard
                key={index}
                img={ShortSet}
                name={"Cycling short and top"}
                color={"Green"}
                price={"$50.60"}
              />
            ))}
          </ProductCat>
        </div>
      </section>
    </main>
  );
};

export default WomenCat;
