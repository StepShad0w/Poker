import React, { useState } from "react";
import { ImSpades } from "react-icons/im";
import { PiHeartStraightFill } from "react-icons/pi";
import "./App.css";

const CardValidator = () => {
  const [cardValue, setCardValue] = useState("");
  const [suit, setSuit] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const cardData = [
    { value: "2", type: "Two" },
    { value: "3", type: "Three" },
    { value: "4", type: "Four" },
    { value: "5", type: "Five" },
    { value: "6", type: "Six" },
    { value: "7", type: "Seven" },
    { value: "8", type: "Eight" },
    { value: "9", type: "Nine" },
    { value: "10", type: "Ten" },
    { value: "J", type: "Jack" },
    { value: "Q", type: "Queen" },
    { value: "K", type: "King" },
    { value: "A", type: "Ace" },
    { value: "JK", type: "Joker" },
    { value: "Queen", type: "Queen" },
  ];

  const validateCard = () => {
    if (cardValue && suit) {
      const foundCard = cardData.find((card) => card.value === cardValue);
      
      if (foundCard) {
        if(foundCard.value==="JK"){
          setSelectedCard(foundCard);
          if(suit ==="Hearts"|| suit==="Diamonds" ){
            alert(`This is a ${foundCard.type} of red`)
          }
          else{
          alert(`This is a ${foundCard.type} of black`)}
        }
        else{
        setSelectedCard(foundCard);
        alert(`This is a ${foundCard.type} of ${suit}`);
      } }
      else {
        alert("Card not found.");
      }
    } else {
      alert("Please enter card value and select suit.");
    }
  };
 
  const renderCardMessage = () => {
    if (selectedCard) {
      return <p>This is a {selectedCard.type} of {suit}</p>;
    }
    return null;
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
      <select value={suit} onChange={(e) => setSuit(e.target.value)}>
        <option value="">Select suit</option>
        <option value="Hearts">♥</option>
        <option value="Diamonds">♦</option>
        <option value="Clubs">♣</option>
        <option value="Spades">♠</option>
      </select>
      <button onClick={validateCard}>Validate</button>
      
    </div>
    <PiHeartStraightFill className="hearts" />
    </div>
    </>
  );
};

export default CardValidator;
