import { useState } from "react";

function Flashcard({question, answer}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div
      className="card"
      onClick={handleClick}
      style={{ border: "1px solid #ccc", padding: "20px", cursor: "pointer" }}
    >
      <p>{isFlipped ? answer : question}</p>
    </div>
  );
}

export default Flashcard;
