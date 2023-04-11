"use client";

import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import Window from './components/Window'
import Image from 'next/image'
import style from './page.module.css'
import { AuthContext, UserContext } from './ContextProvider';

export default function Home() {

  const { auth, setAuth } = useContext(UserContext)

  const router = useRouter()

  if (auth === false) {
    router.push('/login')
  }



  return (
    <Window title="A/S/L Channels">
      <Image src='/assets/images/aol-channels.jpg'
        width={700}
        height={400} />
      <button onClick={() => { router.push('/categories') }} className={style.chatChannel}>Chat!</button>
    </Window>
  )
}
