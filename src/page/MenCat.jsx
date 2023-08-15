// eslint-disable-next-line no-unused-vars
import React from "react";
import Men1 from "../assets/img/men-1.png";
import Men2 from "../assets/img/men-2.png";
import Men3 from "../assets/img/men-3.png";
import Men4 from "../assets/img/men-4.png";
import Men5 from "../assets/img/men-5.png";
import MenLeggings from "../assets/img/men-leggings.png";
import MenLeggingsSet from "../assets/img/men-leggings-set.png";
import MenJoggers from "../assets/img/men-joggers.png";
import MenShort from "../assets/img/men-short.png";
import IntroPage from "../component/common/Intro";
import ProductCat from "../component/common/ProductCat";
import ProductCard from "../component/cards/ProductCard";

const MenCat = () => {
  return (
    <main className="menpage">
      <section className="menpage__section-intro  pad-main py-[100px]">
        <IntroPage>
          <img src={Men1} alt="men carousel image" className="" />
          <img src={Men2} alt="men carousel image" className="" />
          <img src={Men3} alt="men carousel image" className="" />
          <img src={Men4} alt="men carousel image" className="" />
          <img src={Men5} alt="men carousel image" className="" />
        </IntroPage>
      </section>

      <section className="menpage__section-top">
        <div className="menpage__div-top-container px-14 pt-[300px]">
          <h2 className="header__8 white w-[65%]">
            You put in the work, We ensure your fittings shows your physique
          </h2>
        </div>
      </section>

      <section className="menpage__section-leggings py-[100px]">
        <div className="menpage__div-leggings-container pad-main">
          <ProductCat title={"Mens Leggings"}>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <ProductCard
                key={index}
                img={MenLeggings}
                name={"Gs power original Tight Leggings"}
                color={"Black"}
                price={"$50.60"}
              />
            ))}
          </ProductCat>
        </div>
      </section>

      <section className="menpage__section-joggers">
        <div className="menpage__div-joggers-container pad-main">
          <ProductCat title={"Mens Joggers"}>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <ProductCard
                key={index}
                img={MenJoggers}
                name={"Original Hoodie and pants"}
                color={"Blue"}
                price={"$50.60"}
              />
            ))}
          </ProductCat>
        </div>
      </section>

      <section className="menpage__section-shorts py-[100px]">
        <div className="menpage__div-shorts-container pad-main">
          <ProductCat title={"Men Shorts"}>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <ProductCard
                key={index}
                img={MenShort}
                name={"Stretch Sports Bra"}
                color={"White"}
                price={"$50.60"}
              />
            ))}
          </ProductCat>
        </div>
      </section>

      <section className="menpage__section-leggings-set pt-[100px] pb-[300px]">
        <div className="menpage__div-leggings-set-container pad-main">
          <ProductCat title={"Men Leggings set"}>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <ProductCard
                key={index}
                img={MenLeggingsSet}
                name={"C back Bra and leggings set"}
                color={"Gray"}
                price={"$50.60"}
              />
            ))}
          </ProductCat>
        </div>
      </section>
    </main>
  );
};

export default MenCat;
