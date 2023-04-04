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
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
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
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
]

export default function Chatroom() {

  const activeUsers = [{ username: 'FakeUser' }, { username: 'FakeUser2' }]
  const messages = [{ author: 'FakeUser', text: 'Test' }, { author: 'FakeUser2', text: 'Test2' }]

  return (
    <div>
      <div className={styles.chatContainer}>
        <div className={styles.chatCol}>
          <div className={styles.chatWindow}>
            {messages.map((message, index) => (<ChatLine message={message} key={index} />))}
          </div>
          <ReactQuill modules={modules} formats={formats} theme="snow" />
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