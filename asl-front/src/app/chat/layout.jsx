'use client';

import '../../app/globals.css'
// import styles from './Chatroom.module.css'
import '98.css'
// import ReactQuill from "react-quill";
// import 'react-quill/dist/quill.snow.css';
import React, { useState, useEffect, Suspense } from 'react'
// import ListBuddy from './ListBuddy';
// import ChatLine from './Chatline';


// const modules = {
//   toolbar: [
//     [{ font: [] }],
//     [{ color: ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
//     ['bold', 'italic', 'underline']
//   ],
//   clipboard: {
//     matchVisual: false,
//   },
// }

// const formats = [
//   'font',
//   'color',
//   'bold',
//   'italic',
//   'underline'
// ]

let activeUsers = [{ username: 'FakeUser' }, { username: 'FakeUser2' }]
let messages = [{ author: 'FakeUser', text: 'Test' }, { author: 'FakeUser2', text: 'Test2' }]

const currentUser = 'davidkoll'


if (activeUsers.includes({ username: currentUser }) === false) {
  activeUsers.push({ username: currentUser })
}

export default function Chatroom({ children }) {


  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      {children}
    </Suspense>
  )
}