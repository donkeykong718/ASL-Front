import React, { useRef, useEffect } from "react";
import "98.css";
import "../../src/app/globals.css";

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

  return (
    <>
      <div style={{ height: "100px" }}></div>

      <div className="flex-container">
        <div
          className="window"
          style={{
            height: "600px",
            width: "300px",
            backgroundColor: "silver",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          ref={windowRef}
        >
          <div className="title-bar">
          <div
              className="title-bar-icon"
              style={{
                height: "10%",
                width: "10%",
                // backgroundColor: "#005BAB",
                // opacity: 1,
              }}
            >
              <img
                src="/aol-man.png"
                alt=""
                style={{ margin: "0 auto" }}
              />
            </div>
            <div className="title-bar-text"
              style={{
              width:"180px"
            }}
            >Sign On</div>
            <div className="title-bar-controls">
              <button className="controls" aria-label="Minimize"></button>
              <button className="controls" aria-label="Maximize"></button>
              <button className="controls" aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body">
            <div
              className="aol-box"
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#005BAB",
                opacity: 1,
                
              }}
            >
           <img
  src="/cool-man.png"
  alt=""
  style={{ margin: "0 auto", height: "40%", width: "40%", float: "right" }}
/>

              <div
                className="ASL-title"
                style={{
                  height: "25%",
                  width: "100%",
                  backgroundColor: "#005BAB",
                  opacity: 1,

                }}>
                 
              <img
                src="/ASL-logo-text.png"
                alt=""
                style={{ margin: "0 auto" }}
              />
              </div>
              {/* <div style={{ height: "100px" }}></div> */}

            </div>
            <div
              className="field-row-stacked"
              style={{ width: "200px", justifyContent: "center" }}
            >
              <label for="text22">Screen Name</label>
              <input id="text22" type="user" value="" />
            </div>
            <div className="field-row-stacked" style={{ width: "200px" }}>
              <label for="text23">Password</label>
              <input id="text23" type="password" value="" />
              <button className="submit"></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
