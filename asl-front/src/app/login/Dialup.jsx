"use client";
import useSound from 'use-sound'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from '../dial-up/Dial-up.module.css'

export default function Dialup() {
  const audioRef = useRef(null);
  // const [playModem] = useSound("/assets/sounds/dial-up-modem.wav");

  const [imageIndex, setImageIndex] = useState(0);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const images = [
    "/assets/images/dial_up1.png",
    "/assets/images/dial_up2.png",
    "/assets/images/dial_up3.png",
    "/assets/images/dial_up4.png",
    "/assets/images/warp_modem.gif"
  ];

  const nextImage = () => {
    const index = Math.floor((elapsedTime % duration) / (duration / images.length));
    setImageIndex(index);
  };

  useEffect(() => {
    setIsAnimationPlaying(true);
    setElapsedTime(0);
    setDuration(audioRef.current.duration * 1000);
  }, []);

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
    if (elapsedTime > 0 && elapsedTime >= duration) {
      setIsAnimationPlaying(false);
    }
    nextImage();
  }, [elapsedTime]);

  const onAnimationEnd = () => {
    setIsAnimationPlaying(false);
  };


  const router = useRouter()

  useEffect(() => {

    console.log('Countdown started')
    setTimeout(() => { router.push('/home') }, 2000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex-container">
      <div className={styles.background} />

      <audio ref={audioRef} src="/assets/sounds/dial-up-modem.wav" autoPlay />

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
    </div>
  )
}


