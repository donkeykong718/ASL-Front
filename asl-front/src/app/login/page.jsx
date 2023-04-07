"use client";
import React, { useRef, useEffect } from "react";
import "98.css";
import "../globals.css";
import styles from "./Login.module.css";

export default function Login() {
  const windowRef = useRef(null);

  useEffect(() => {
    const windowElement = windowRef.current;
    if (windowElement) {
      let isDragging = false;
      let originalX = 0;
      let originalY = 0;

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

        // set the new position of the window element
        windowElement.style.left = `${newLeft}px`;
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
    <>
      <div style={{ height: "100px" }}></div>

      <div className="flex-container">
        <div className={styles.window} ref={windowRef}>
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
                  src="/assets/images/ASL-logo-text.png.png.png"
                  alt=""
                  className={styles.ASLLogo}
                />
              </div>
            </div>

            <div className={styles.loginFieldRowStacked}>
              <label htmlFor="text22">Screen Name</label>
              <input id="text22" type="user" />
            </div>
            <div className={styles.loginFieldRowStacked}>
              <label htmlFor="text23">Password</label>
              <input id="text23" type="password" />
            </div>

            <div className={styles.loginFieldRowStacked}>
              <input type="checkbox" id="example1" />
              <label htmlFor="example1">Save Password</label>
            </div>

            <div className={styles.loginFieldRowStacked}>
              <input checked type="checkbox" id="example2" />
              <label htmlFor="example2">Save Password</label>
            </div>

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
                onClick={() => {
                  alert("Sign On button clicked!");
                }}
              >
                <div style={{ minWidth: "38px" }}>
                  <img
                    src="/assets/images/green-signon-btn.png"
                    style={{ height: "35px" }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
