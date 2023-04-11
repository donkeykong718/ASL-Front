"use client";

import styles from "./Login.module.css";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext, UserContext } from "../ContextProvider";
import * as userServices from '../api/services/user'
import { LoginContext } from "./login-provider";
import useSound from "use-sound";
import ButtonBox from './Buttonbox'
import { useRouter } from 'next/navigation'


export default function SignUp() {
  const { auth, setAuth } = useContext(AuthContext)
  const { user, setUser } = useContext(UserContext)
  const { login, setLogin } = useContext(LoginContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [check, setCheck] = useState('')
  const [users, setUsers] = useState([])
  const [unique, setUnique] = useState(true)


  const router = useRouter();
  const [playError] = useSound('/assets/sounds/quickerror.mp3')

  useEffect(() => {
    async function getAllUsers() {
      const userList = await userServices.getUsers()
      const userArray = userList.map(item => item.username)
      console.log(userList);
      setUsers(userArray);
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
      if (response.name === 'AxiosError') {
        playError();
      }
      else {
        setUser(response)
        setAuth(true)
        setLogin(true)
        router.refresh()
      }
    }
    else {
      playError();
    }
  }

  const clearUnique = e => {
    setUsername(e.target.value)
    setUnique(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.loginFieldRowStacked}>
        <label htmlFor="text22">Screen Name</label>
        <input d="text22" type="text" value={username} onChange={clearUnique} />

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

      <ButtonBox />
    </form>
  )
}