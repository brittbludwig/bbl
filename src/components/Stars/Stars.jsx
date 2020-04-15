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
  const [starDensity, setStarDensity] = useState(globalState.state.starDensity);
  const stars = [star1, star2, star3, star4, star5, star6, star7];

  useEffect(() => {
    if (starDensity !== globalState.state.starDensity) {
      setStarDensity(globalState.state.starDensity);
    }
  }, [starDensity, globalState.state.starDensity]);

  let starList = [];
  for (let i = 0; i < starDensity; i++) {
    for (let r = 0; r < stars.length; r++) {
      starList.push(stars[r]);
    }
  }

  let nightSky = [];
  starList.forEach((item, key) => {
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
      <img key={key} src={item} className="Stars__star" style={styles} alt="" />
    );
  });

  return <div className="Stars">{nightSky}</div>;
};

export default Stars;
