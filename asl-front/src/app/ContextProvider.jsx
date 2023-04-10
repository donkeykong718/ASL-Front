"use client";

import './globals.css'
import '98.css'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Window from './components/Window'

export const AuthContext = React.createContext();
export const UserContext = React.createContext();


export default function ContextProvider({ children }) {

  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});

  const router = useRouter();

  useEffect(() => {

    const stringUser = localStorage.getItem('user')
    const currentUser = JSON.parse(stringUser)
    if (currentUser) {
      console.log(currentUser)
      setUser(currentUser);
      setAuth(true);
      // router.push('/home')
    }
    else { router.push('/login') }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <UserContext.Provider value={{ user, setUser }}>
          <Window mainWindow='true' title={`Welcome to A/S/L! ${user.username ? `You are logged in as ${user.username}` : `You are not logged on`}`} >{children}</Window>
        </UserContext.Provider>
      </AuthContext.Provider>
    </>
  )
}