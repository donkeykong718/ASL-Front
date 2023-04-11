"use client";

import React, { useState, useContext } from "react";
// import "98.css";
// import "../globals.css";
import styles from "./Login.module.css"
import Window from '../components/Window'
import Signin from './Signin'
import Signup from './Signup'
import Dialup from './Dialup'
import { AuthContext } from "../ContextProvider";
import LogoBox from './Logo'
export const LoginContext = React.createContext();

export default function LoginProivder() {

  const { auth, setAuth } = useContext(AuthContext)
  const [login, setLogin] = useState(true)

  console.log('In login provider, the auth is' + auth)

  return (
    <div className={styles.LoginContainer}>
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