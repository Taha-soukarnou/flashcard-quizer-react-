import { useState } from "react";
import "./App.css";
import Flashcard from "./Flashcard.jsx";

const gameData = {
  en: [
    { id: 1, question: "What is React?", answer: "A library for building UIs" },
    {
      id: 2,
      question: "What is a Component?",
      answer: "A reusable piece of UI",
    },
    { id: 3, question: "What is State?", answer: "Internal data that changes" },
    {
      id: 4,
      question: "What is a Prop?",
      answer: "Data passed from parent to child",
    },
  ],
  fr: [
    {
      id: 1,
      question: "C'est quoi React?",
      answer: "Une bibliothèque pour les UIs",
    },
    {
      id: 2,
      question: "C'est quoi un Composant?",
      answer: "Un bloc d'interface réutilisable",
    },
    {
      id: 3,
      question: "C'est quoi le State?",
      answer: "Des données internes qui changent",
    },
    {
      id: 4,
      question: "C'est quoi une Prop?",
      answer: "Données passées du parent à l'enfant",
    },
  ],
};

function App() {
  const [lang, setLang] = useState("en");
  const [currentId, setCurrentId] = useState(0);
  const currentDeck = gameData[lang];

  const handleNext = () => {
    if (currentId < currentDeck.length - 1) {
      setCurrentId(currentId + 1);
    }
  };

  const handlePrevious = () => {
    if (currentId > 0) {
      setCurrentId(currentId - 1);
    }
  };

  const handleLanguageSwitch = () => {
    const newLang = lang === "en" ? "fr" : "en";
    setLang(newLang);
    setCurrentId(0);
  };
  return (
    <div className="App">
      <h1>Flashcard Quizer</h1>

      <button onClick={handleLanguageSwitch}>
        Current Language: {lang === "en" ? "English" : "Français"}
      </button>

      <Flashcard
        question={currentDeck[currentId].question}
        answer={currentDeck[currentId].answer}
      />

      <div className="actions">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
export default App;
