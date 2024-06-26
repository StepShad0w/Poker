import React, { useState } from "react";
import { ImSpades } from "react-icons/im";
import { PiHeartStraightFill } from "react-icons/pi";
import "./App.css";
import { CARD_VALUES, CARD_SUITS,CARD_COLORS } from "./utils/constans";

const CardValidator = () => {
  const [cardValue, setCardValue] = useState("");
  const [suit, setSuit] = useState("");
  const [color, setColor] = useState("");
  const validateCard = () => {
    if (cardValue && suit) {
      const cardType = CARD_VALUES[cardValue];
      const cardColor = CARD_COLORS[color];

      if (cardType && cardColor) {
        if (cardType === "Joker") {
          alert(`${cardColor} ${cardType} `);
        } else {
          alert(`${cardType} of ${CARD_SUITS[suit]} ${cardColor}`);
        }
      } else {
        alert(`incorect card, please try again`);
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
        {navigator.platform}
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
            {Object.entries(CARD_SUITS).map(([key, value]) => (
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
