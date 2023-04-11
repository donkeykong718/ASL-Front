"use client";

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Window from '../components/Window'
import Image from 'next/image'
import style from './Home.module.css'
import Link from 'next/link';

export default function Home() {

  const router = useRouter()

  useEffect(() => {

    console.log('Countdown started')
    setTimeout(() => { router.push('/categories') }, 26000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
  
    <Window title="A/S/L Channels">
      <Image src='/assets/images/aol-channels.jpg'
        width={700}
        height={400} />
      <button onClick={() => { router.push('/categories') }} className={style.chatChannel}>Chat!</button>
      </Window>
      
  )
}
