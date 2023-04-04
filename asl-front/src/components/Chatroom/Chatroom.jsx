// import { useState, useEffect } from 'react'
import styles from './Chatroom.module.css'
// import '98.css'
// import { w3cwebsocket as W3CWebSocket } from "websocket"

// import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import React, { useState, useEffect } from 'react'
import dynamic from "next/dynamic";
import ListBuddy from './ListBuddy';
import ChatLine from './ChatLine';

const ReactQuill = dynamic(import('react-quill'), {
  ssr: false, loading: () => <p>Loading ...</p>
})

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ color: ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
    ['bold', 'italic', 'underline']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'font',
  'color',
  'bold',
  'italic',
  'underline'
]

export default function Chatroom() {

  const [value, setValue] = useState('');

  const activeUsers = [{ username: 'FakeUser' }, { username: 'FakeUser2' }]
  const messages = [{ author: 'FakeUser', text: 'Test' }, { author: 'FakeUser2', text: 'Test2' }]

  return (
    <div>
      <div className={styles.chatContainer}>
        <div className={styles.chatCol}>
          <div className={styles.chatWindow}>
            {messages.map((message, index) => (<ChatLine message={message} key={index} />))}
          </div>
          <ReactQuill modules={modules} formats={formats} value={value} onChange={setValue} theme="snow" />
        </div>
        <div className={styles.buddyCol}>
          <header>## people here</header>
          <div className={styles.buddyList}>
            {/* Need to input active users. How? */}
            {activeUsers.map((user, index) => (<ListBuddy user={user} key={index} />))}
          </div>
        </div>
      </div>
    </div>
  )
}

//IGNORE EVERYTHING BELOW

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

// <p>FakeUser: This is a fake conversation</p>
// <p>FakeUser2: It is?</p>
// <p>FakeUser: Pretty sure.</p>
// <p>FakeUser2: Damn.</p>
// <p>FakeUser: Kinda fucked up, huh?</p>
// <p>FakeUser: Like we don't even exit?</p>
// <p>FakeUser2: I mean, your name is "fake user"</p>
// <p>FakeUser: So? Your name is "fake user," too.</p>
// <p>FakeUser2: No, my name is "FakeUser2."</p>
// <p>FakeUser: That's what I said!</p>
// <p>FakeUser2: No, you said: "FakeUser: So? Your name is "fake user," too." </p>
// <p>FakeUser: This is a fake conversation</p>
// <p>FakeUser2: It is?</p>
// <p>FakeUser: Pretty sure.</p>
// <p>FakeUser2: Damn.</p>
// <p>FakeUser: Kinda fucked up, huh?</p>
// <p>FakeUser: Like we don't even exit?</p>
// <p>FakeUser2: I mean, your name is "fake user"</p>
// <p>FakeUser: So? Your name is "fake user," too.</p>
// <p>FakeUser2: No, my name is "FakeUser2."</p>
// <p>FakeUser: That's what I said!</p>
// <p>FakeUser2: No, you said: "FakeUser: So? Your name is "fake user," too." </p>
// <p>FakeUser: This is a fake conversation</p>
// <p>FakeUser2: It is?</p>
// <p>FakeUser: Pretty sure.</p>
// <p>FakeUser2: Damn.</p>
// <p>FakeUser: Kinda fucked up, huh?</p>
// <p>FakeUser: Like we don't even exit?</p>
// <p>FakeUser2: I mean, your name is "fake user"</p>
// <p>FakeUser: So? Your name is "fake user," too.</p>
// <p>FakeUser2: No, my name is "FakeUser2."</p>
// <p>FakeUser: That's what I said!</p>
// <p>FakeUser2: No, you said: "FakeUser: So? Your name is "fake user," too." </p>
// <p>FakeUser: This is a fake conversation</p>
// <p>FakeUser2: It is?</p>
// <p>FakeUser: Pretty sure.</p>
// <p>FakeUser2: Damn.</p>
// <p>FakeUser: Kinda fucked up, huh?</p>
// <p>FakeUser: Like we don't even exit?</p>
// <p>FakeUser2: I mean, your name is "fake user"</p>
// <p>FakeUser: So? Your name is "fake user," too.</p>
// <p>FakeUser2: No, my name is "FakeUser2."</p>
// <p>FakeUser: That's what I said!</p>
// <p>FakeUser2: No, you said: "FakeUser: So? Your name is "fake user," too." </p>
// <p>FakeUser: This is a fake conversation</p>
// <p>FakeUser2: It is?</p>
// <p>FakeUser: Pretty sure.</p>
// <p>FakeUser2: Damn.</p>
// <p>FakeUser: Kinda fucked up, huh?</p>
// <p>FakeUser: Like we don't even exit?</p>
// <p>FakeUser2: I mean, your name is "fake user"</p>
// <p>FakeUser: So? Your name is "fake user," too.</p>
// <p>FakeUser2: No, my name is "FakeUser2."</p>
// <p>FakeUser: That's what I said!</p>
// <p>FakeUser2: No, you said: "FakeUser: So? Your name is "fake user," too." </p>