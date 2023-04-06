'use client';

import '../../../app/globals.css'
import styles from '../Chatroom.module.css'
import '98.css'
import useWebSocket, { ReadyState } from "react-use-websocket";

import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import React, { useState, useEffect, Suspense } from 'react'
import ListBuddy from './ListBuddy';
import ChatLine from './Chatline';
import { useParams } from 'next/navigation';
import * as chatFunctions from '../../api/services/chatrooms'
import * as userFunctions from '../../api/services/user'
import * as messageFunctions from '../../api/services/message'


const modules = {
  toolbar: [
    [{ font: [] }],
    [{ color: ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
    ['bold', 'italic', 'underline']
  ],
  clipboard: {
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

// let activeUsers = [{ username: 'FakeUser' }, { username: 'FakeUser2' }]
// let messages = [{ author: 'FakeUser', text: 'Test' }, { author: 'FakeUser2', text: 'Test2' }]

const currentUser = 'admin'
const currentPassword = 'password'


// if (activeUsers.includes({ username: currentUser }) === false) {
//   activeUsers.push({ username: currentUser })
// }

export default function Chatroom() {

  const [value, setValue] = useState({});
  const [user, setUser] = useState({});
  const [room, setRoom] = useState({});
  const [messageHistory, setMessageHistory] = useState([])
  const [hasMoreMessages, setHasMoreMessages] = useState(false)
  const [pcpts, setParticipants] = useState([])
  const [conversation, setConversation] = useState(null);
  const [page, setPage] = useState(2)

  const { name } = useParams();
  const roomName = name;

  useEffect(async () => {
    const roomInfo = await chatFunctions.getaRoom(name)
    setRoom(roomInfo);
    console.log(roomInfo)
    const user = await userFunctions.signin(currentUser, currentPassword)
    console.log(user)
    setUser(user);
    fetchMessages();
  }, [])



  const { readyState, sendJsonMessage } = useWebSocket(
    user ? `ws://asl-back.herokuapp.com/chats/${roomName}/` : null,
    {
      queryParams: {
        token: user ? user.token : "",
      },
      onOpen: () => {
        console.log("Connected!");
      },
      onClose: () => {
        console.log("Disconnected!");
      },
      // onMessage handler
      onMessage: (e) => {
        const data = JSON.parse(e.data);
        switch (data.type) {
          case "chat_message_echo":
            setMessageHistory((prev) => [...prev, data.message]);
            sendJsonMessage({
              type: "read_messages",
            });
            break;
          case "last_50_messages":
            setMessageHistory(data.messages);
            setHasMoreMessages(data.has_more);
            break;
          case "user_join":
            setParticipants((pcpts) => {
              if (!pcpts.includes(data.user)) {
                return [...pcpts, data.user];
              }
              return pcpts;
            });
            break;
          case "user_leave":
            setParticipants((pcpts) => {
              const newPcpts = pcpts.filter((x) => x !== data.user);
              return newPcpts;
            });
            break;
          case "online_user_list":
            setParticipants(data.users);
            break;
          case "typing":
            updateTyping(data);
            break;
          default:
            console.error("Unknown message type!");
            break;
        }
      },
    }
  );

  const handleSubmit = () => {
    let message = value;
    sendJsonMessage({
      type: "chat_message",
      message,
    });
    setValue("");
    // let newMessage = { room: name, from_user: user, content: message }

    // setValue(newMessage);
    // const sentMessage = await messageFunctions.sendMessage(newMessage);
    // messages.push(newMessage);
    // console.log(sentMessage);
  }

  async function fetchMessages() {
    const apiRes = await fetch(
      `https://asl-back.herokuapp.com/messages/?conversation=${roomName}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Token ${user?.token}`,
        },
      }
    );
    if (apiRes.status === 200) {
      const data = await apiRes.json();
      console.log(data.results[0])
      setHasMoreMessages(data.next !== null);
      // setPage(page + 1);
      setMessageHistory((prev) => [data.results[0], ...prev]);
      console.log(messageHistory)
    }
  }

  // useEffect(() => {
  //   async function fetchConversation() {
  //     const apiRes = await fetch(
  //       `http://127.0.0.1:8000/conversations/${roomName}/`,
  //       {
  //         method: "GET",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //           Authorization: `Token ${user?.token}`,
  //         },
  //       }
  //     );
  //     if (apiRes.status === 200) {
  //       const data = await apiRes.json();
  //       setConversation(data);
  //     }
  //   }
  //   fetchConversation();
  // }, [roomName, user]);



  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">
          <img></img>
          ASL - [ {name} Chat] </div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">
        <div className={styles.chatContainer}>
          <div className={styles.chatCol}>
            <div className={styles.chatWindow}>
              {messageHistory.map((message, index) => (<ChatLine message={message} key={index} />))}
            </div>
            <ReactQuill modules={modules} formats={formats} value={value} onChange={setValue} theme="snow" />
            <button className={styles.submitButton} onClick={handleSubmit}>Send!</button>

          </div>
          <div className={styles.buddyCol}>
            <p className={styles.userList}>{pcpts.length} people here</p>
            <div className={styles.buddyList}>
              {pcpts.map((user, index) => (<ListBuddy user={user} key={index} />))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}