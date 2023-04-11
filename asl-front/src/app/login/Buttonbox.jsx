'use client';

import styles from './Login.module.css'
import Image from 'next/image'
import { Link } from 'next/navigation'
import { useState, useContext } from 'react'
import { LoginContext } from './login-provider'

export default function ButtonBox() {

  const { login, setLogin } = useContext(LoginContext)

  return (
    <div className={styles.loginBottomBtns}>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target='_blank' >
        <Image src="/assets/images/helpbtn.png" alt="Help Button"
          height={30}
          width={30} />
      </a>

      <div className={styles.loginBottomBtns}>
        <button onClick={() => { login ? setLogin(false) : setLogin(true) }} className={styles.setupBtn}>
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