"use client";

import { useState, useEffect } from "react";
import { useSound } from "use-sound";
import styles from "./Dial-up.module.css";

export default function DialUp() {
  const [imageIndex, setImageIndex] = useState(0);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const images = [
    "/assets/images/dial_up1.png",
    "/assets/images/dial_up2.png",
    "/assets/images/dial_up3.png",
    "/assets/images/dial_up4.png",
  ];

  const nextImage = () => {
    const index = Math.floor((elapsedTime % 10000) / 2500);
    setImageIndex(index);
  };

  const handleClick = () => {
    setIsAnimationPlaying(true);
    setElapsedTime(0);
  };

  useEffect(() => {
    let intervalId;
    if (isAnimationPlaying) {
      intervalId = setInterval(() => {
        setElapsedTime((t) => t + 1000);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isAnimationPlaying]);

  useEffect(() => {
    if (elapsedTime > 0 && elapsedTime % 10000 === 0) {
      setIsAnimationPlaying(false);
    }
    nextImage();
  }, [elapsedTime]);

  const onAnimationEnd = () => {
    setIsAnimationPlaying(false);
  };

  return (
    <div className="flex-container">
      <div className="title-bar">
        <div className="title-bar-text"></div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div
        className={`window-body ${isAnimationPlaying ? styles.animation : ""}`}
        onAnimationEnd={onAnimationEnd}
        style={{
          backgroundImage: `url(${images[imageIndex]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "650px",
        }}
      >
        <div
          className={styles.overlay}
          style={{ backgroundImage: `url(${images[imageIndex]})` }}
        />
        <button onClick={handleClick}>Start Animation</button>
      </div>
    </div>
  );
}
