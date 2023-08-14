// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Profile from "../../assets/img/profile-1.png";
import Profile2 from "../../assets/img/profile-2.png";
import Profile3 from "../../assets/img/profile-3.png";
import { ReactComponent as Apost } from "../../assets/icons/block-quote.svg";

const Feedback = () => {
  const [feedData, setFeedData] = useState({});

  const review = [
    {
      img: Profile,
      name: "Seun Hannah",
      review:
        "Started buying my gym wears from Rockme and it has been perfect.. i Highly recommend them.",
    },
    {
      img: Profile2,
      name: "Sepideh Yazdi",
      review:
        "I highly recommend Rockme for your comfortable and premium quality sportswear",
    },
    {
      img: Profile3,
      name: "Jeodes John",
      review: "Rockme is simply exceptional",
    },
  ];
  return (
    <section className="feedback">
      <div className="feedback__div-container grid-2 pt-16 gap-20">
        <div className="feedback__div-left flex flex-col gap-14">
          {review.map((card, index) => (
            <div
              className="feedback__div-card-left flex items-start gap-12 "
              key={index}
              onClick={() => setFeedData(card)}
            >
              <div className="feedback__div-img flex-[0.2]">
                <img src={card.img} alt="profile" />
              </div>
              <div className="flex-[0.8]">
                <h4 className="header__4 black">{card.name}</h4>
                <p className="p8 grey-bold">{card.review}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="feedback__div-right flex items-center justify-center">
          {feedData.review && (
            <div className="feedback__div-card-right p-10">
              <Apost />
              <p className="p3 grey-bold">{feedData.review}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
