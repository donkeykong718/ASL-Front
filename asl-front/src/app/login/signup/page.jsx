"use client";

import styles from "../Login.module.css";
import React, { useRef, useState, useEffect, useContext } from "react";
import { AuthContext, UserContext } from "../../context-provider";
import * as userServices from '../../api/services/user'
import { LoginContext } from "../login-provider";
import Image from 'next/image'
import useSound from "use-sound";
import ButtonBox from '../Buttonbox'
import LogoBox from '../Logo'


export default function SignUp() {
  const { auth, setAuth } = useContext(AuthContext)
  const { user, setUser } = useContext(UserContext)
  const { login, setLogin } = useContext(LoginContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [check, setCheck] = useState('')
  const [users, setUsers] = useState([])
  const [unique, setUnique] = useState(true)
  const [playError] = useSound('/assets/sounds/quickerror.mp3')

  useEffect(() => {
    async function getAllUsers() {
      const userList = await userServices.getUsers()
      // const userArray = userList.map(item => item.username)
      console.log(userList);
      // setUsers(userArray);
    }
    getAllUsers()

  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    if (users.includes(username)) {
      setUnique(false);
      setUsername('');
      playError();
    }
    if (password === check) {
      const response = await userServices.signup(username, password);
      console.log('The response is:')
      console.log(response)
      if (response.status === 200) {
        setUser(response)
        setAuth(true)
        setLogin(true)
      }
      else {
        playError();
      }
    }
    else {
      playError();
    }
  }

  return (
    <>
      <LogoBox />

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

        <ButtonBox />
      </form>
    </>
  )
}