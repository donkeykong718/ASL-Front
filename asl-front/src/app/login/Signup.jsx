"use client";

import styles from "../login/Login.module.css";
import React, { useRef, useState, useEffect, useContext } from "react";
import { AuthContext } from "../layout";
import * as userServices from '../api/services/user'
import { LoginContext } from "./page";


export default function SignUp() {
  const { auth, setAuth } = useContext(AuthContext)
  const { login, setLogin } = useContext(LoginContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [check, setCheck] = useState('')
  const [users, setUsers] = useState([])
  const [unique, setUnique] = useState(true)

  useEffect(async () => {
    async function getAllUsers() {
      const userList = await userServices.getUsers()
      const userArray = userList.map(item => item.username)
      console.log(userArray);
      setUsers(userArray);
    }
    getAllUsers()

  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    if (users.includes(username)) {
      setUnique(false);
      setUsername('');
    }
    if (password === check) {
      const response = await userServices.signup(username, password);
      console.log('The response is:')
      console.log(response)
      setAuth(true)
      setLogin(true)
    }
  }

  return (
    <>
      <div className={styles.aolBox}>
        <div className={styles.logoContainer}>
          <img
            src="/assets/images/cool-man.png"
            alt=""
            className={styles.logo2}
          />
        </div>
        <div className={styles.ASLTitle}>
          <img
            src="/assets/images/ASL-logo-text.png"
            alt=""
            className={styles.ASLLogo}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.loginFieldRowStacked}>
          <label htmlFor="text22">Screen Name</label>
          <input id="text22" type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        {unique ? <></> : <><p style={{ color: 'red', fontStyle: "italic" }}>Error: an account with that username already exists.</p></>}
        <div className={styles.loginFieldRowStacked}>
          <label htmlFor="text23">Password</label>
          <input id="text23" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <p style={{ color: 'red', marginTop: '3px' }}>Required.  &nbsp; Letters, numbers, @/./+/-/_ only.
        </p>
        <div className={styles.loginFieldRowStacked}>
          <label htmlFor="text24">Confirm Password</label>
          <input id="text24" type="password" value={check} onChange={e => setCheck(e.target.value)} />
          {(password === check) ? <></> : <><p style={{ color: 'red', fontStyle: "italic" }}>Error: passwords do not match.</p></>}
        </div>

        {/* <div className={styles.loginFieldRowStacked}>
          <input type="checkbox" id="example1" />
          <label htmlFor="example1">Save Password</label>
        </div> */}

        {/* <div className={styles.loginFieldRowStacked}>
          <input checked type="checkbox" id="example2" />
          <label htmlFor="example2">Save Password</label>
        </div> */}

        {/* <div className={styles.loginFieldRowStacked}>
          <input disabled type="checkbox" id="example3" />
          <label htmlFor="example3">Auto-login</label>
        </div> */}

        <div className={styles.loginBottomBtns}>
          <button className={styles.helpBtn}>
            <img src="/assets/images/helpbtn.png" alt="Help Button" />
          </button>

          <div className={styles.loginBottomBtns}>
            <button className={styles.setupBtn}>
              <img src="/assets/images/setupbtn.png" alt="Set Up Button" />
            </button>
          </div>

          <div className={styles.loginBottomBtns}>

            <button
              className={styles.signupBtn}
            >
              <img style={{ maxHeight: '25px' }}
                src="/assets/images/cool-man.png"
              />
              Sign-up
            </button>
          </div>
        </div>
      </form>
    </>
  )
}