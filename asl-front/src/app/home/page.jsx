"use client";

import useSound from 'use-sound'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {

  const [playModem] = useSound('/assets/sounds/dial-up-modem.wav')
  const router = useRouter()

  useEffect(() => {
    playModem()
    console.log('Countdown started')
    setTimeout(() => { router.push('/categories') }, 26000)
  }, [])

  return (
    <div>
      Something.
    </div>
  )
}
