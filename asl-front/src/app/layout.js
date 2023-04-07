"use client";

import './globals.css'
import '98.css'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
// import Home from './home/page'
// import Login from './login/page'

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export const AuthContext = React.createContext();


export default function RootLayout({ children }) {

  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState('');
  const router = useRouter();

  useEffect(() => {
    const stringUser = localStorage.getItem('user')
    const jsonUser = JSON.parse(stringUser)
    const currentUser = jsonUser.username;
    console.log(currentUser)
    setUser(currentUser);
    // console.log(currentUser.username);
    currentUser ? router.push('/home') : router.push('/login')
  }, [])


  return (
    <html lang="en">
      <body>
        <div className="window">
          <div className="title-bar">
            <div className="title-bar-text">
              <img style={{ height: '1em', marginRight: '5px' }} src='assets/images/cool-man.png' />
              Welcome to A/S/L. You are logged in as: {user}</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="title-bar" style={{ background: '#c0bfbe', height: "1.25em" }}>
            {/* <img style={{ height: '1em', marginRight: '5px', display: 'inline' }} src='assets/images/cool-man.png' /> */}
            <ul className="title-bar-text" style={{ color: '#605e60', listStyle: 'none', display: 'flex' }}>
              <li ><span style={{ textDecoration: 'underline', marginLeft: '10px' }}>F</span>ile</li>
              <li><span style={{ textDecoration: 'underline', marginLeft: '10px' }}>E</span>dit</li>
              <li><span style={{ textDecoration: 'underline', marginLeft: '10px' }}>W</span>indow</li>
              <li><span style={{ textDecoration: 'underline', marginLeft: '10px' }}>S</span>ign Off</li>
              <li><span style={{ textDecoration: 'underline', marginLeft: '10px' }}>H</span>elp</li>
            </ul>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <img id='dummy-toolbar' src='/assets/images/dummy_toolbar.png' />
          {children}
        </div>
      </body>
    </html>
  )
}