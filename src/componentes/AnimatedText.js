import { useState, useEffect } from "react";

export const AnimatedText = ({ word }) => {
  const [displayedText, setDisplayedText] = useState("".padEnd(word.length, "_"));
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText((prevText) => {
        return prevText
          .split("")
          .map((char, index) => {
            if (index < currentIndex) return word[index];
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("");
      });
      
      if (currentIndex < word.length) {
        currentIndex++;
      } else {
        clearInterval(interval);
        setDisplayedText(word);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [word]);

  return (
    <h1>
      {displayedText}
    </h1>
  );
};