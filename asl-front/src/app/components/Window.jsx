"use client";

import { AuthContext } from "../layout";
import { useContext, useEffect, useRef, useState } from "react";

export default function Window({ children, mainWindow, title }) {

  // const { auth, setAuth } = useContext(AuthContext);
  // const [user, setUser] = useState({})
  const windowRef = useRef(null);


  //   if (typeof window !== 'undefined'){
  //   const stringUser = localStorage.getItem('user')
  //   const jsonUser = JSON.parse(stringUser)
  //   if (jsonUser) {
  //     const currentUser = jsonUser.username;
  //     console.log(currentUser)
  //     setUser(currentUser);
  //     // setAuth(true);
  //     // router.push('/home')
  //   }
  // }
  useEffect(() => {
    const windowElement = windowRef.current;
    if (windowElement) {
      let isDragging = false;
      let originalX;
      let originalY;

      const handleMouseDown = (event) => {
        // check if the mouse down event occurred on the window title bar
        if (event.target.classList.contains("title-bar")) {
          isDragging = true;
          originalX = event.clientX;
          originalY = event.clientY;

          // add styles to the window element to make it draggable
          windowElement.style.userSelect = "none";
          windowElement.style.cursor = "grabbing";
        }
      };

      const handleMouseMove = (event) => {
        if (!isDragging) {
          return;
        }

        // calculate the new window position based on the mouse position
        const newLeft = windowElement.offsetLeft + event.movementX;
        const newTop = windowElement.offsetTop + event.movementY;
        console.log(`Window offset left is ${windowElement.offsetLeft}`);
        console.log(`Window offset top is ${windowElement.offsetTop}`)
        console.log(`Event movement X is ${event.movementX}`)
        console.log(`Event movement Y is ${event.movementY}`)
        console.log(newLeft);
        console.log(newTop);

        // set the new position of the window element
        windowElement.style.left = `${newLeft}}px`;
        windowElement.style.top = `${newTop}px`;
      };

      const handleMouseUp = () => {
        isDragging = false;

        // remove the draggable styles from the window element
        windowElement.style.userSelect = "";
        windowElement.style.cursor = "";
      };

      // add event listeners to handle dragging the window
      windowElement.addEventListener("mousedown", handleMouseDown);
      windowElement.addEventListener("mousemove", handleMouseMove);
      windowElement.addEventListener("mouseup", handleMouseUp);

      return () => {
        // remove the event listeners when the component is unmounted
        windowElement.removeEventListener("mousedown", handleMouseDown);
        windowElement.removeEventListener("mousemove", handleMouseMove);
        windowElement.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, []);

  return (
    <div className="window" ref={windowRef}>
      <div className="title-bar">
        <div className="title-bar-text">
          <img style={{ height: '1em', marginRight: '5px' }} src='assets/images/cool-man.png' />
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
            <li><span style={{ textDecoration: 'underline', marginLeft: '10px' }}>S</span>ign Off</li>
            <li><span style={{ textDecoration: 'underline', marginLeft: '10px' }}>H</span>elp</li>
          </ul>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <img id='dummy-toolbar' src='/assets/images/dummy_toolbar.png' /> </> : <></>}

      <div className='window-body'>
        {/* <AuthContext.Provider value={{ auth, setAuth }}> */}
        {children}
        {/* </AuthContext.Provider> */}
      </div>
    </div>
  )
}