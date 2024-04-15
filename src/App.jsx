import React, { useState } from "react";
import { ImSpades } from "react-icons/im";
import { PiHeartStraightFill } from "react-icons/pi";
import "./App.css";
import { cardValues, suits,colors } from "./utils/constans";

const CardValidator = () => {
  const [cardValue, setCardValue] = useState("");
  const [suit, setSuit] = useState("");
  const [color, setColor] = useState("");
  const validateCard = () => {
    if (cardValue && suit) {
      const cardType = cardValues[cardValue];
      const cardColor = colors[color];

      if (cardType && cardColor) {
        if (cardType === "Joker") {
          alert(`${cardColor} ${cardType} `);
        } else {
          alert(`${cardType} of ${suits[suit]} ${cardColor}`);
        }
      } else {
        alert(`incorect card`);
      }
    }
  };
  const handleSuitChange = (e) => {
    setSuit(e.target.value);
    setColor(e.target.value);
  };

  return (
    <>
      <div className="wrapper">
        <ImSpades className="spades" />
        <div className="validator">
          <h1>Input your card</h1>
          <input
            type="text"
            placeholder="Enter card value"
            value={cardValue}
            onChange={(e) => setCardValue(e.target.value)}
          />
          <select value={suit} onChange={handleSuitChange}>
            <option value="">Select suit</option>
            {Object.entries(suits).map(([key, value]) => (
              <option key={key} value={key}>
                {key}
                {value}
              </option>
            ))}
          </select>
          <button onClick={validateCard}>Validate</button>
        </div>
        <PiHeartStraightFill className="hearts" />
      </div>
    </>
  );
};

export default CardValidator;
