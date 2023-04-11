'use client';

import styles from './Login.module.css'
import Image from 'next/image'
import { Link } from 'next/navigation'
import { useState, useContext } from 'react'
import { LoginContext } from './login-provider'

export default function ButtonBox() {

  const { login, setLogin } = useContext(LoginContext)

  const rickRolls = ["https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://www.youtube.com/watch?v=hGlyFc79BUE", "https://www.youtube.com/watch?v=q3XezETe7JY", "https://www.youtube.com/watch?v=Pk-kbjw0Y8U"]

  const easterEgg = Math.floor(Math.random() * rickRolls.length);

  return (
    <div className={styles.loginBottomBtns}>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target='_blank' >
        <Image src="/assets/images/helpbtn.png" alt="Help Button"
          height={30}
          width={30} />
      </a>

      <div className={styles.loginBottomBtns}>
        <button onClick={() => { setLogin(false) }} className={styles.setupBtn}>
          <Image src="/assets/images/setupbtn.png" alt="Set Up Button"
            height={30}
            width={30} />
        </button>
      </div>

      <div className={styles.loginBottomBtns}>

        <button onClick={() => { console.log('Sign on clicked') }}
          className={styles.signupBtn}
        >
          <Image
            height={30}
            width={30}
            src="/assets/images/cool-man.png" alt="logo"
          />
          Sign-on
        </button>
      </div>
    </div>
  )

}