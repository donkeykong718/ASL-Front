'use client';

import styles from './Login.module.css'
import Image from 'next/image'
import { useState, useContext } from 'react'
import { LoginContext } from './login-provider'

export default function ButtonBox() {

  const { login, setLogin } = useContext(LoginContext)

  return (
    <div className={styles.loginBottomBtns}>
      <button onClick={() => { setLogin(false) }} className={styles.helpBtn}>
        <Image src="/assets/images/helpbtn.png" alt="Help Button"
          height={30}
          width={30} />
      </button>

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