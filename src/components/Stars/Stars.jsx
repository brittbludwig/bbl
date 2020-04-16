import React, { useEffect, useState, useContext } from "react";
import { store } from "../../store/store";
import randomNumber from "../../utilities/random-number/random-number";
import star1 from "../../static/images/star1.png";
import star2 from "../../static/images/star2.png";
import star3 from "../../static/images/star3.png";
import star4 from "../../static/images/star4.png";
import star5 from "../../static/images/star5.png";
import star6 from "../../static/images/star6.png";
import star7 from "../../static/images/star7.png";

const Stars = () => {
  const globalState = useContext(store);
  const currentDensity = globalState.state.starDensity;
  const [starList, setStarList] = useState([]);
  const [starTemplate, setStarTemplate] = useState([]);
  const stars = [star1, star2, star3, star4, star5, star6, star7];

  useEffect(() => {
    if (starList.length === currentDensity * stars.length) return;
    else {
      let starArray = [];
      for (let i = 0; i < currentDensity; i++) {
        for (let r = 0; r < stars.length; r++) {
          starArray.push(stars[r]);
        }
      }
      setStarList(starArray);

      let nightSky = [];
      starArray.forEach((item, key) => {
        const positionTop = randomNumber(0, 95);
        const positionLeft = randomNumber(0, 95);
        const size = randomNumber(0, 2) + "." + randomNumber(0, 6);
        const animationDelay = randomNumber(5, 60);
        const isShootingStar = randomNumber(0, starList.length) === key;
        const animateToH = randomNumber(100, 500);
        const animateToW = randomNumber(100, 500);

        const styles = {
          top: `${positionTop}%`,
          left: `${positionLeft}%`,
          position: "absolute",
          animation: `pulse 10s linear ${animationDelay}s infinite forwards`,
          transition: "all 0.5s",
          transform: `scale(${size}) ${
            isShootingStar ? `translate(${animateToH}%, ${animateToW}%)` : ``
          }`,
        };

        nightSky.push(
          <img
            key={key}
            src={item}
            className="Stars__star"
            style={styles}
            alt=""
          />
        );
        setStarTemplate(nightSky);
      });
    }
  }, [starList, starTemplate, currentDensity, stars]);

  return <div className="Stars">{starTemplate}</div>;
};

export default Stars;
