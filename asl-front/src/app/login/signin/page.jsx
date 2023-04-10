"use client";

import styles from "../Login.module.css";
import React, { useRef, useState, useEffect, useContext } from "react";
import { AuthContext, UserContext } from "../../ContextProvider";
import * as userFunctions from '../../api/services/user'
import { LoginContext } from "../login-provider";
import useSound from "use-sound";
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import ButtonBox from "../Buttonbox";
import LogoBox from '../Logo'


export default function Signin() {
  const { auth, setAuth } = useContext(AuthContext)
  const { user, setUser } = useContext(UserContext)
  const { login, setLogin } = useContext(LoginContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState([])
  const [error, setError] = useState(false)
  const [error2, setError2] = useState(false)

  const router = useRouter();

  const [playError] = useSound('/assets/sounds/quickerror.mp3')


  useEffect(() => {
    async function getAllUsers() {
      const userList = await userFunctions.getUsers()
      setUsers(userList)
    }
    getAllUsers();
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    const userArray = users.map(item => item.username)
    if (userArray.includes(username)) {
      const response = await userFunctions.signin(username, password);
      console.log('The response is:')
      console.log(response);
      if (response) {
        setUser(response)
        setAuth(true);
        router.refresh()
      }
      else {
        playError();
        setError2(true)
      }
    }
    else {
      playError();
      setError(true);
      console.log('No such user');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.loginFieldRowStacked}>
        <label htmlFor="text22">Screen Name</label>
        <input id="text22" type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </div>

      {error ? <><p style={{ color: "red", fontStyle: "italic", fontWeight: 'bold' }}>Username not found.</p><p>Click on &apos;Help&apos; to create an account.</p></> : <></>}
      {error2 ? <><p style={{ color: "red", fontStyle: "italic", fontWeight: 'bold' }}>Incorrect password.</p></> : <></>}

      <div className={styles.loginFieldRowStacked}>
        <label htmlFor="text23">Password</label>
        <input id="text23" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>

      <div className={styles.loginFieldRowStacked}>
        <input type="checkbox" id="example1" />
        <label htmlFor="example1">Save Password</label>
      </div>
      <ButtonBox />
    </form >
  )
}