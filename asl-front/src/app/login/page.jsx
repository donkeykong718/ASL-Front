"use client";

import React, { useRef, useEffect } from "react";
import "98.css";
import "../globals.css";
import styles from "./Login.module.css";
import logo from '/public/assets/images/aol-man.png';


export default function Login() {
  const windowRef = useRef(null);

  useEffect(() => {
    const windowElement = windowRef.current;
    if (windowElement) {
      let isDragging = false;
      let originalX = 0;
      let originalY = 0;

      const handleMouseDown = (event) => {
        isDragging = true;
        originalX = event.clientX;
        originalY = event.clientY;
      };

      const handleMouseMove = (event) => {
        if (!isDragging) {
          return;
        }

        const deltaX = event.clientX - originalX;
        const deltaY = event.clientY - originalY;
        const newLeft = windowElement.offsetLeft + deltaX;
        const newTop = windowElement.offsetTop + deltaY;

        windowElement.style.left = `${newLeft}px`;
        windowElement.style.top = `${newTop}px`;

        originalX = event.clientX;
        originalY = event.clientY;
      };

      const handleMouseUp = () => {
        isDragging = false;
      };

      windowElement.addEventListener("mousedown", handleMouseDown);
      windowElement.addEventListener("mousemove", handleMouseMove);
      windowElement.addEventListener("mouseup", handleMouseUp);

      return () => {
        windowElement.removeEventListener("mousedown", handleMouseDown);
        windowElement.removeEventListener("mousemove", handleMouseMove);
        windowElement.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, []);
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div style={{ height: "100px" }}></div>

      <div className="flex-container">
        
        <div className={styles.window}>
        <div className="title-bar">
      <div className="logo-container">
        <img src={logo} alt="Logo" width={40} height={40} />
      </div>
      <div className="title-bar-text">Sign On</div>
      <div className="title-bar-controls">
        <button aria-label="Close"></button>
      </div>
    </div>
          <div className={styles.windowBody}>
            <div className={styles.aolBox}>
              {/* <div style={{ height: "25px" }}></div> */}
              <img
                src="/assets/images/cool-man.png"
                alt=""
                style={{
                  margin: "0 auto",
                  height: "60%",
                  width: "60%",
                  float: "right",
                  backgroundColor: "#005BAB",
                }}
              />

              <div className={styles.ASLTitle}>
                <div style={{ height: "25px" }}></div>
                <img
                  src="/assets/images/ASL-logo-text.png.png.png"
                  alt=""
                  style={{
                    margin: "0 auto",
                    border: "10px ",
                    boxSizing: "border-box",
                    paddingBottom: "10px",
                  }}
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
                    src="/assets/images/signon-btn-grey.png"
                    style={{ width: "38px", height: "32px" }}
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
