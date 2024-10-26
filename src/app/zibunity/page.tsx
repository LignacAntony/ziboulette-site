"use client";

import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

interface Card {
  id: number;
  content: string;
}

const Zibunity: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([
    { id: 1, content: "Carte 1: Bienvenue sur ZibUnity!" },
    { id: 2, content: "Carte 2: Swipez pour découvrir plus!" },
    { id: 3, content: "Carte 3: Vous pouvez ajouter vos propres cartes!" },
  ]);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentCardIndex < cards.length - 1) {
        setCurrentCardIndex(currentCardIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (currentCardIndex > 0) {
        setCurrentCardIndex(currentCardIndex - 1);
      }
    },
  });

  const addNewCard = () => {
    const newCard: Card = {
      id: cards.length + 1,
      content: `Nouvelle carte ${cards.length + 1}`,
    };
    setCards([...cards, newCard]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>ZibUnity</h1>
      <div {...handlers} style={{ touchAction: "pan-y" }}>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            padding: "20px",
            margin: "20px",
            minHeight: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          {cards[currentCardIndex].content}
        </div>
      </div>
      <p>Swipez à gauche ou à droite pour changer de carte</p>
      <p>
        Carte actuelle: {currentCardIndex + 1} / {cards.length}
      </p>
      <button onClick={addNewCard} style={{ marginTop: "20px" }}>
        Ajouter une nouvelle carte
      </button>
    </div>
  );
};

export default Zibunity;
