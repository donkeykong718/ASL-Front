"use client";

import styles from "../login/Login.module.css";
import React, { useRef, useState, useEffect, useContext } from "react";
import { AuthContext } from "../../layout";
import * as userServices from '../../api/services/user'


export default function SignUp() {
  const { auth, setAuth } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState([])
  const [login, setLogin] = useState(true)

  useEffect(async () => {
    async function getAllUsers() {
      const response = await userServices.getUsers()
      return response
    }
    const userList = await getAllUsers()
    const userArray = userList.map(item => item.username)
    console.log(userArray);
    setUsers(userArray);
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    if (users.includes(username)) {
      const response = await userServices.signin(username, password);
      console.log('The response is:')
      console.log(response);
      setAuth(true);
    }
    else {
      setLogin(false);
    }
  }

  return (
    <div className={styles.window}>
      <div className="title-bar">
        <div className="logo-container">
          <img
            src="/assets/images/cool-man.png"
            alt="Logo"
            width={20}
            height={20}
          />
        </div>
        <div className="title-bar-text">Sign On</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className={styles.windowBody}>
        <div className={styles.aolBox}>
          <div className={styles.logoContainer}>
            <img
              src="/assets/images/cool-man.png"
              alt=""
              className={styles.logo}
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
            <input id="text22" type="user" value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div className={styles.loginFieldRowStacked}>
            <label htmlFor="text23">Password</label>
            <input id="text23" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>

          <div className={styles.loginFieldRowStacked}>
            <input type="checkbox" id="example1" />
            <label htmlFor="example1">Save Password</label>
          </div>

          {/* <div className={styles.loginFieldRowStacked}>
          <input checked type="checkbox" id="example2" />
          <label htmlFor="example2">Save Password</label>
        </div> */}

          <div className={styles.loginFieldRowStacked}>
            <input disabled type="checkbox" id="example3" />
            <label htmlFor="example3">Auto-login</label>
          </div>

          <div className={styles.loginBottomBtns}>
            <button className={styles.helpBtn}>
              <img src="/assets/images/helpbtn.png" alt="Help Button" />
            </button>

            <div className={styles.loginBottomBtns}>
              <button className={styles.setupBtn}>
                <img src="/assets/images/setupbtn.png" alt="Set Up Button" />
              </button>
            </div>

            <button
              className={styles.signOnBtn}
            >
              <div style={{ minWidth: "38px" }}>
                <img
                  src="/assets/images/green-signon-btn.png"
                  style={{ height: "35px" }}
                />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}