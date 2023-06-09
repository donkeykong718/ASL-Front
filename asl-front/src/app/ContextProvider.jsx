"use client";

// import './globals.css'
// import '98.css'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Window from './components/Window'

export const AuthContext = React.createContext();
export const UserContext = React.createContext();


export default function ContextProvider({ children }) {

  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({ username: 'none' });

  const router = useRouter();

  useEffect(() => {

    const stringUser = localStorage.getItem('user')
    if (stringUser != undefined && auth === false) {
      const currentUser = JSON.parse(stringUser)
      setUser(currentUser);
      setAuth(true);
      console.log('Auth is ' + auth)
      console.log(user)

    }
    else if (stringUser != undefined && auth === true) {
      console.log('Auth is ' + auth)
      console.log(user)
    }
    else {
      router.push('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <UserContext.Provider value={{ user, setUser }}>
          <Window mainWindow='true' title={`Welcome to A/S/L! ${(user && user.username !== 'none' && user !== undefined) ? `You are logged in as ${user.username}` : `You are not logged on`}`} >{children}</Window>
        </UserContext.Provider>
      </AuthContext.Provider>
    </>
  )
}