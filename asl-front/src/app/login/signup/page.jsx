"use client";

import React, { useRef, useState, useEffect, useContext } from "react";
// import "98.css";
// import "../globals.css";
// import styles from "./Login.module.css";
// import { AuthContext } from "../layout";
// import * as userServices from '../api/services/user'
// import { useRouter } from 'next/navigation'
// import Home from '../home/page'
import Window from '../../components/Window'
import Signup from './Signup'

export const LoginContext = React.createContext();

export default function Signup({ children }) {


  // const { auth, setAuth } = useContext(AuthContext)
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  // const [users, setUsers] = useState([])
  const [login, setLogin] = useState(true)

  // const router = useRouter();

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
    // <>

    <div className="flex-container">
      <LoginContext.Provider value={{ login, setLogin }}>
        <Window children={<Signup />} title="Sign On" />
      </LoginContext.Provider>
      {/* <div className={styles.window} ref={windowRef}>
          <div className="title-bar">
            <div className="logo-container">
              <img
                src="/assets/images/cool-man.png"
                alt="Logo"
                width={20}
                height={20}
              />
            </div> */}
      {/* <div className="title-bar-text">Sign On</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div> */}
    </div>
  );
  // {/* :
  //     <Home />
  //   } */}

}
