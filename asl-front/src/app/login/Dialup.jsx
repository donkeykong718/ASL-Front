"use client";
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './Dialup.module.css'
import Image from 'next/image'

export default function Dialup() {
  const audioRef = useRef(null);

  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    "/assets/images/dial_up1.png",
    "/assets/images/dial_up2.png",
    "/assets/images/dial_up3.png",
    "/assets/images/dial_up4.png",
    "/assets/images/warp_modem.gif"
  ];

  setInterval(() => {
    setImageIndex(imageIndex + 1)
    console.log(imageIndex);
    console.log(images[imageIndex])
  }, 5000)


  const router = useRouter()

  useEffect(() => {

    console.log('Countdown started')
    setTimeout(() => {
      clearInterval();
      router.push('/')
    }, 26000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.animationContainer}>
      <audio ref={audioRef} src="/assets/sounds/dial-up-modem.wav" autoPlay />
      <Image className={styles.animationImage} src={images[imageIndex]} height={500} width={800} alt='' />
    </div>
  )
}


