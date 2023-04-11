"use client";

import { AuthContext, UserContext } from "../ContextProvider";
import React, { Suspense, useContext, useEffect, useRef, useState } from "react";
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSound } from "use-sound";
// import coolMan from '../../../public/assets/images / cool - man.png'
import * as userFunctions from '../api/services/user'
import Loading from '../components/Loading'

export default function Window({ children, mainWindow, title }) {

  const [playGoodbye] = useSound("/assets/sounds/Goodbye.wav");
  const { auth, setAuth } = useContext(AuthContext);
  const { user, setUser } = useContext(UserContext)
  const windowRef = useRef(null);
  const router = useRouter();

  // const window = document.querySelector('.window')


  //   if (typeof window !== 'undefined'){
  //   const stringUser = localStorage.getItem('user')
  //   const jsonUser = JSON.parse(stringUser)
  //   if (jsonUser) {
  //     const currentUser = jsonUser.usernaame;
  //     console.log(currentUser)
  //     setUser(currentUser);
  //     // setAuth(true);
  //     // router.push('/home')
  //   }
  // }
  useEffect(() => {
    const windowElement = windowRef.current;
    // if (windowElement) {
    //   let isDragging = false;
    //   let originalX;
    //   let originalY;

    //   const handleMouseDown = (event) => {
    //     // check if the mouse down event occurred on the window title bar
    //     if (event.target.classList.contains("title-bar")) {
    //       isDragging = true;
    //       originalX = event.clientX;
    //       originalY = event.clientY;

    //       // add styles to the window element to make it draggable
    //       windowElement.style.userSelect = "none";
    //       windowElement.style.cursor = "grabbing";
    //     }
    //   };

    //   const handleMouseMove = (event) => {
    //     if (!isDragging) {
    //       return;
    //     }

    //     // calculate the new window position based on the mouse position
    //     const newLeft = windowElement.offsetLeft + event.movementX;
    //     const newTop = windowElement.offsetTop + event.movementY;
    //     console.log(`Window offset left is ${windowElement.offsetLeft}`);
    //     console.log(`Window offset top is ${windowElement.offsetTop}`)
    //     console.log(`Event movement X is ${event.movementX}`)
    //     console.log(`Event movement Y is ${event.movementY}`)
    //     console.log(newLeft);
    //     console.log(newTop);

    //     // set the new position of the window element
    //     windowElement.style.left = `${newLeft}}px`;
    //     windowElement.style.top = `${newTop}px`;
    //   };

    //   const handleMouseUp = () => {
    //     isDragging = false;

    //     // remove the draggable styles from the window element
    //     windowElement.style.userSelect = "";
    //     windowElement.style.cursor = "";
    //   };

    //   // add event listeners to handle dragging the window
    //   windowElement.addEventListener("mousedown", handleMouseDown);
    //   windowElement.addEventListener("mousemove", handleMouseMove);
    //   windowElement.addEventListener("mouseup", handleMouseUp);

      // return () => {
      //   // remove the event listeners when the component is unmounted
      //   windowElement.removeEventListener("mousedown", handleMouseDown);
      //   windowElement.removeEventListener("mousemove", handleMouseMove);
      //   windowElement.removeEventListener("mouseup", handleMouseUp);
      // };
    }
  , []);

  return (
    <div className= 'main'>
    <div className="window" ref={windowRef}>
      <div className="title-bar">
        <div className="title-bar-text">
          <Image
            width={20}
            height={20}
            style={{ marginRight: '5px' }} src='/assets/images/cool-man.png' alt='logo' />
          {title}{/* Welcome to A/S/L. You are logged in as: {user} */}
        </div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>

      {mainWindow ? <>
        <div className="title-bar" style={{ background: '#c0bfbe', height: "1.25em" }}>
          {/* <img style={{ height: '1em', marginRight: '5px', display: 'inline' }} src='assets/images/cool-man.png' /> */}
          <ul className="title-bar-text" style={{ color: '#605e60', listStyle: 'none', display: 'flex' }}>
            <li ><span style={{ textDecoration: 'underline', marginLeft: '10px' }}>F</span>ile</li>
            <li><span style={{ textDecoration: 'underline', marginLeft: '10px' }}>E</span>dit</li>
            <li><span style={{ textDecoration: 'underline', marginLeft: '10px' }}>W</span>indow</li>

            <li className="signoff" onClick={() => {
              playGoodbye()
              setUser({})
              setAuth(false)
              userFunctions.logOff()
              console.log('Sign off has been clicked')
              // console.log(localStorage.getItem('user'));
              router.push('/login')
            }}>

              <span style={{ textDecoration: 'underline', marginLeft: '10px' }}>S</span>ign Off</li>
            <li><span style={{ textDecoration: 'underline', marginLeft: '10px' }}>H</span>elp</li>
          </ul>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button onClick={() => { windowRef.parentNode.removeChild(windowRef) }} aria-label="Close"></button>
          </div>
        </div>
        <Image id='dummy-toolbar' src='/assets/images/dummy_toolbar.png' alt='toolbar'
          width={700}
          height={60}
        /> </> : <></>}
      <Suspense fallback={<Loading />}>
        <div className='window-body'>
          {/* <AuthContext.Provider value={{ auth, setAuth }}> */}
          {children}
          {/* </AuthContext.Provider> */}
        </div>
      </Suspense>
    </div>
  )
}