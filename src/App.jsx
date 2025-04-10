import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasStarted) {
        const progress = Math.min(window.scrollY / window.innerHeight, 1);
        document.body.style.backgroundImage = `linear-gradient(to bottom right, #3a7bd5, #00d2ff)`;
        document.querySelector(".constellation-container").style.opacity =
          1 - progress;
      }
    };

    if (hasStarted) {
      window.addEventListener("scroll", handleScroll);
      document.body.style.overflowY = "scroll";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasStarted]);

  useEffect(() => {
    const container = document.querySelector(".constellation-container");
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = `${Math.random() * 2 + 1}px`;
      star.style.height = `${Math.random() * 2 + 1}px`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      container.appendChild(star);
    }
    return () => {
      container.innerHTML = "";
    };
  }, []);

  const handleStart = () => {
    setHasStarted(true);
    document.body.style.scrollBehavior = "smooth";
    window.scrollBy({ top: 3, behavior: "smooth" });
  };

  return (
    <div className="container">
      <div className="constellation-container"></div>
      <div className="main-container">
        <div className="section">
          <div className="recuadro">
            <button className="button" onClick={handleStart}>
              Deslizar hacia abajo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
