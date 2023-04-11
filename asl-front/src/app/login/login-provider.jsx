"use client";

import React, { useRef, useState, useEffect, useContext } from "react";
import "98.css";
import "../globals.css";
import styles from "./Login.module.css"
// import { AuthContext } from "../layout";
// import * as userServices from '../api/services/user'
import { useRouter } from 'next/navigation'
// import Home from '../home/page'
import Window from '../components/Window'
import Signin from './Signin'
import Signup from './Signup'
import Dialup from './Dialup'
import { AuthContext } from "../ContextProvider";
import useSound from "use-sound";
import LogoBox from './Logo'

// import ButtonBox from "./Buttonbox";
export const LoginContext = React.createContext();

export default function LoginProivder() {

  const [playModem] = useSound('/assets/sounds/dial-up-modem.wav')


  const { auth, setAuth } = useContext(AuthContext)
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  // const [users, setUsers] = useState([])
  const [login, setLogin] = useState(true)

  const router = useRouter();
  console.log('In login provider, the auth is' + auth)

  useEffect(() => {
    if (auth === true) { playModem() }
  }, [auth])

  // if (login) {
  //   router.push('/login/signin')
  // }
  // else {
  //   router.push('/login/signup')
  // }
  // useEffect(async () => {
  //   async function getAllUsers() {
  //     const response = await userServices.getUsers()
  //     return response
  //   }
  //   const userList = await getAllUsers()
  //   const userArray = userList.map(item => item.username)
  //   console.log(userArray);
  //   setUsers(userArray);
  // }, [])


  // async function handleSubmit(e) {
  //   e.preventDefault()
  //   if (users.includes(username)) {
  //     const response = await userServices.signin(username, password);
  //     console.log('The response is:')
  //     console.log(response);
  //     setAuth(true);
  //   }
  //   else {
  //     setLogin(false);
  //   }
  // if (response.username) {
  //   // setAuth(true)
  //   // router.push('/home')
  // }

  // }


  return (
    <div>
      {(auth === true) ? <Dialup /> :
        <LoginContext.Provider value={{ login, setLogin }}>
          {login ?
            < Window title="A/S/L Sign On">
              <LogoBox /><Signin /></Window> :
            < Window title="A/S/L Sign Up">
              <LogoBox /><Signup /></Window>}
        </LoginContext.Provider>}
    </div>
  );
}


/// 
{/* <div className={styles.aolBox}>
  <div className={styles.logoContainer}>
    <Image
      src="/assets/images/cool-man.png"
      alt=""
      className={styles.logo}
      width={200}
      height={25}
    />
  </div>
  <div className={styles.ASLTitle}>
    <Image
      src="/assets/images/ASL-logo-text.png"
      alt=""
      className={styles.ASLLogo}
      width={200}
      height={50}
    />
  </div>
</div> */}