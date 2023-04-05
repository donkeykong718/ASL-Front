'use client';

import React, { useRef, useEffect } from "react";
import "98.css";
import "../globals.css"

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
            padding: "3px, 3px, 3px, 3px",
          }}
          ref={windowRef}
        >
          <div className="title-bar">
            <div
              className="title-bar-icon"
              style={{
                height: "10%",
                width: "10%",
                marginRight: "13px",
                // backgroundColor: "#005BAB",
                // opacity: 1,
              }}
            >
              <img src="/assets/images/aol-man.png" alt="" style={{ margin: "0 auto" }} />
            </div>
            <div
              className="title-bar-text"
              style={{
                width: "180px",
              }}
            >
              Sign On
            </div>
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
              <div style={{ height: "25px" }}></div>
              <img
                src="/assets/image/cool-man.png"
                alt=""
                style={{
                  margin: "0 auto",
                  height: "60%",
                  width: "60%",
                  float: "right",
                  backgroundColor: "#005BAB",
                }}
              />

              <div
                className="ASL-title"
                style={{
                  height: "25%",
                  width: "100%",
                  backgroundColor: "#005BAB",
                  opacity: 1,
                }}
              >
                <div style={{ height: "25px" }}></div>
                <img
                  src="/assets/images/ASL-logo-text.png"
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
              {/* <button className="submit"></button> */}
            </div>
            <div className="login-bottom-btns">
              {/* <button
                className="help-btn"
                style={{ marginLeft: "10px", marginRight: "18px", minWidth: "19px" }}

                
              > */}
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAgCAYAAADwvkPPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE0MUJGNjFDRkFDQjExRUFBODc3QzI2NzYxRDQzM0U3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE0MUJGNjFERkFDQjExRUFBODc3QzI2NzYxRDQzM0U3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTQxQkY2MUFGQUNCMTFFQUE4NzdDMjY3NjFENDMzRTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTQxQkY2MUJGQUNCMTFFQUE4NzdDMjY3NjFENDMzRTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Veg3+AAABjUlEQVR42pxVgZGEIAwkN3SkNWlNWpPWlHfV8CEu+H+ZYe4gYVk2ISZVTa2xbZtO06TDMGhKqQzMsQ6/j/+khq3rquM4nv+PjQC2A845DH7ElU2M0bIsJ4P75KbBjzjEYx8FwzXugGKYY8QDsIZ4CuacxTA3nRjj64KaMtNr3/ckItUatDJf03rZZIwja7BsXrOXEKbjawLiuDV5iO4Slb4GiyA25A7u2pEMJVpLXMsugzrPM2oMGknciEq3TNoLoNm0+jliKkFjAvw7Zdd0FX+t4dcH25Pxheqr/gF2OX/XPSB7Eb7qH2DGDteMgG+FSsEswANioPOAtfUvY4p5E6x+MqloaMOSA183AbwFtesYbF1S3jvtwSD1fMdh6LJ1cbMXwCq+03WkC/atfRiTFjOs91h7zWJQ73FTwPzXjhG7hGdovuycjxOx4Q5U979qEj4uR4cDZvqx64l96TNxVJv+k+38VkNEM43SFCncyeqYxblG5gAKrCWTK7K5NHSqfNKqGfbBYGEe7EeAAQAWPp0sUHLiqgAAAABJRU5ErkJggg=="
                style={{ width: "19 px", height: "32 px" }}
              />
              {/* </button> */}

              {/* <button className="setup-button" /> */}
              <div style={{ minWidth: "25px" }}>
                {" "}
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAfCAYAAAASsGZ+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNFRTc0OTdERkFDQjExRUE5MTM0RkUwNTYwNzY5MTJGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNFRTc0OTdFRkFDQjExRUE5MTM0RkUwNTYwNzY5MTJGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0VFNzQ5N0JGQUNCMTFFQTkxMzRGRTA1NjA3NjkxMkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0VFNzQ5N0NGQUNCMTFFQTkxMzRGRTA1NjA3NjkxMkYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz43cCtsAAAB0UlEQVR42qRVAbaEIAiUfd3IztSeyT2TnonvmBSftNXW93iVBcMMSI6Z3YzFGHnbNvbes3OuGJ7vfKYAQggq8G64x77+5jGIACAwR1/Me1cYyTdgZEGnQBAMQQUgbP5fQMgoLDXwMIiwiBUAZmtxstjfTYPshT5ZSC2QvU4C7CQB7f9yD1ZK+/Xz+dTnlOV0OZmOw1O5pCbSypAJ+7HBhIpmA2td1xwwuRz8ZFTYpHKTQSo75955L8cl+W4ZlShnXAICw1ccXDQoFgA2o9t0Tbzv12l9p5KMBZmqiXRPqUmQw7ib1Ec6bromqAeEj+GkgawhmK/UKgN61F1yyFqd1cp6ekC2ZIqN0/7NbuVqyYTuScljVtFos3RbOJ9mxknWAOggnIMQtrmW7P2Y7FhvjfZRWzosjo6ROYVrSg9Y9JjIf8HaTLEfza5fVhkrRMRi3xxGvrmAwAkT86A2FoSnmVQn9D3VEc2aoWWRrxdW6t1FlReCwsm8IM1Q9uUfoZrDsmLdTOK3KOcjEwlmpBO2R/JfZJP3vKigpIKxyvjnRbbYihVZmbT+LbY1lrOx9DlhQ9XuU6PDyPoCxChASyewm9y/TWoZPXBWspsxdWmIPwEGAEL/49K5kP1MAAAAAElFTkSuQmCC"
                  style={{ width: "25px", height: "31px" }}
                />
              </div>
              {/* </button> */}

              <button
                type="submit"
                disabled=""
                class="sc-fKVqWL hltbDC"
                style={{ marginLeft: "auto", marginRight: "7px;" }}
              >
                <div style={{ minWidth: "38px" }}>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAgBAMAAACMSheAAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAB5QTFRFAAAAoKCggICAwMDAnJyciYmJwsLCr6+v////8PDwtKHRIwAAAAp0Uk5TAP///////////36JFFYAAADjSURBVHichZA9DsIwDIVdszCinqC8/ihsnKELewYOUBUfgbnKlJmN2xKnpUrCwFMkOy+W/TlEX1XAdb8wVFR3tqFCkPlcer3Ij1fWASdCZ9tTXlbB6qRMPExIaVT1U0SmnSYAnsOImzyQE0KsPhV4E4qx3ImMbUFyn2XOxh7QydjLmI5AH4owZMtBxLYVJN2jfo6hVz2kfKyfoD+dkqxoxbr/hYb3zltDNo48I15D3sSIt7sg5K4J3stoJFw00bN5Rgt/PKbVyOpgnGFsOXyMR0+enDkuXvMlxnU3nyFHTr8k1gdRqDoFil5hDwAAAABJRU5ErkJggg=="
                    style={{ width: "38px", height: "32px" }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="taskbar">
      <button className="startButton"></button>
      <div className="menu">
        <div className="menuItem">
          <button className="menuButton" disabled>(Empty)</button>
        </div>
      </div>
    </div> */}
    </>
  );
}
