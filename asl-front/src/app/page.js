'use client';

import styles from './page.module.css'
import '../app/globals.css'
import '98.css'
import useSound from 'use-sound'
// import { useEffect } from 'react'

export default function Home() {

  const [playModem] = useSound('/assets/sounds/dial-up-modem.wav')

  // useEffect(() => { playModem() }, [])

  return (
    <main className={styles.main}>
      <button onClick={playModem()}>Click me!</button>
    </main>
  )
}
