"use client";

import { useState, useEffect } from "react";
import useSound from "use-sound";
import styles from "./Dial-up.module.css";
import { useRouter } from "next/router";

export default function DialUp() {
  const [playModem] = useSound("/assets/sounds/dial-up-modem.wav");

  const [imageIndex, setImageIndex] = useState(0);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const images = [
    "/assets/images/dial_up1.png",
    "/assets/images/dial_up2.png",
    "/assets/images/dial_up3.png",
    "/assets/images/dial_up4.png",
    "/assets/images/warp_modem.gif"

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
      <div className={styles.background} />

      <div
        className={`window-body ${isAnimationPlaying ? styles.animation : ""}`}
        onAnimationEnd={onAnimationEnd}
        style={{
          backgroundImage: `url(${images[imageIndex]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          width: "800px", 
          height: "600px", 
          margin: "auto", 
          display: "flex",
          justifyContent: "center", 
          alignItems: "center",
        }}
      >
        <div
          className={styles.overlay}
          style={{ backgroundImage: `url(${images[imageIndex]})` }}
        />
      </div>
      <button
        onClick={() => {
          playModem(); 
          handleClick(); 
        }}
      >
        Start Animation
      </button>
    </div>
  );
}


