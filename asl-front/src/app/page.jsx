"use client";

import { useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react'
import Window from './components/Window'
import Image from 'next/image'
import styles from './page.module.css'
import { AuthContext, UserContext } from './ContextProvider';

export default function Home() {

  const { auth, setAuth } = useContext(AuthContext)

  const router = useRouter()

  console.log('in page, auth is' + auth)

  useEffect(() => {
    if (auth == false || auth == undefined) {
      router.push('/login')
    }
  }, [])

  return (
    <Window title="A/S/L Channels">
      <div className={styles.channelPage}>
        <Image className={styles.channels} src='/assets/images/aol-channels.jpg'
          width={700}
          height={400}
          alt="old AOL channel page" />
        <button onClick={() => { router.push('/categories') }} className={styles.chatChannel}>Chat!</button>
      </div>
    </Window>
  )
}
