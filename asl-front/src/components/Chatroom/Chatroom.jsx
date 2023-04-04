// import { useState, useEffect } from 'react'
// import styles from './Chatroom.module.css'
// import '98.css'
// import { w3cwebsocket as W3CWebSocket } from "websocket"

import ReactQuill from "react-quill";


export default function Chatroom() {

  // const container = document.getElementById('editor');
  // const editor = new Quill('.editor')

  // const [state, setState] = useState({
  //   filledForm: false,
  //   messages: [],
  //   value: '',
  //   name: '',
  //   room: 'test'
  // })

  // const client = new W3CWebSocket('ws://127.0.0.1:800/ws/' + state.room + '/')

  // useEffect(() => {
  //   client.onopen = () => {
  //     console.log("Websocket Client Connected");
  //   };
  //   client.onmessage = (message) => {
  //     const dataFromServer = JSON.parse(message.data);
  //     if (dataFromServer) {
  //       // setState((state) =>state.messages = [...state.messages, {
  //       //   msg: dataFromServer.text,
  //       //   name: dataFromServer.send
  //       // }]
  //       // setState(state);
  //       setState((state) => ({
  //         messages: [
  //           ...state.messages,
  //           {
  //             msg: dataFromServer.text,
  //             name: dataFromServer.sender,
  //           },
  //         ],
  //       }));
  //     }
  //   }
  // }, [])


  return (
    <>
      <ReactQuill />
    </>


    // <div className={styles.chatContainer} >
    // <div className={styles.chatContainer}>
    //   <div className="title-bar">
    //     <div className="title-bar-text">A Window With Stuff In It</div>
    //     <div className="title-bar-controls">
    //       <button aria-label="Minimize"></button>
    //       <button aria-label="Maximize"></button>
    //       <button aria-label="Close"></button>
    //     </div>
    //   </div>
    //   <div className={styles.chatWindow}>
    //     <div className="window-body">
    //       <p>There's so much room for activities!</p>
    //     </div>
    //   </div>
    //   <div className={styles.toolBar}>
    //     <select className={styles.select}>
    //       <option>Veranda</option>
    //       <option>Arial</option>
    //       <option>Other fonts</option>
    //     </select>
    //     <button className={styles.button}><span style={{
    //       color: 'blue',
    //       fontWeight: 'bolder'
    //     }}>A</span></button>
    //     <button className={styles.button}><span style={{
    //       fontWeight: '800'
    //     }}>B</span></button>
    //     <button className={styles.button}>
    //       <span style={{
    //         fontStyle: 'italic'
    //       }}>I</span>
    //     </button>
    //     <button className={styles.button}><span style={{
    //       textDecoration: 'underline',
    //     }}>u</span></button>
    //   </div>
    // </div>
    // </div >
  )
}