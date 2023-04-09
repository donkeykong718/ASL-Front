import styles from "./Login.module.css";
import React, { useRef, useState, useEffect, useContext } from "react";
import { AuthContext } from "../layout";
import * as userServices from '../api/services/user'
import { LoginContext } from "./page";
import useSound from "use-sound";
import { useRouter } from 'next/navigation'


export default function Signin() {
  const { auth, setAuth } = useContext(AuthContext)
  const { login, setLogin } = useContext(LoginContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState([])
  const [error, setError] = useState(false)

  const router = useRouter();

  const [playError] = useSound('/assets/sounds/quickerror.mp3')


  useEffect(() => {
    async function getAllUsers() {
      const userList = await userServices.getUsers()
      const userArray = userList.map(item => item.username)
      console.log(userArray);
      setUsers(userArray);
    }
    getAllUsers();
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
      playError();
      setError(true);
      console.log('No such user');
    }
  }

  return (
    <>
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
          <input id="text22" type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        {error ? <><p style={{ color: 'red', fontStyle: "italic" }}>Error: username not found.</p><p>Click on "Setup" to create an account.</p></> : <></>}
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
            <button className={styles.setupBtn} onClick={() => { setLogin(false) }}>
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

    </>
  )
}