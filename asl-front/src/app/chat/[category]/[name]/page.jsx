'use client';

import styles from '../../Chatroom.module.css'
import useWebSocket, { ReadyState } from "react-use-websocket";

import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import React, { useContext, useState, useEffect } from 'react'
import ListBuddy from './ListBuddy';
import ChatLine from './Chatline';
import { useParams, useRouter } from 'next/navigation';
import * as chatFunctions from '../../../api/services/chatrooms'
import * as userFunctions from '../../../api/services/user'
import useSound from 'use-sound';
import { RoomContext, SocketContext } from '../../layout'
import { AuthContext, UserContext } from '../../../ContextProvider';
import Link from 'next/link';
import { onKeyUp } from 'react-bootstrap'

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


export default function Chatroom() {

  const { user, setUser } = useContext(UserContext);
  const { socketUrl, setSocketUrl } = useContext(SocketContext)
  // const [user, setUser] = useState({})

  const [value, setValue] = useState({});
  const [messageHistory, setMessageHistory] = useState([])
  const [hasMoreMessages, setHasMoreMessages] = useState(false)
  const [pcpts, setParticipants] = useState([])



  const { category, name } = useParams();
  const roomName = name;

  const [playSend] = useSound('/assets/sounds/imsend.wav')
  const [playReceive] = useSound('/assets/sounds/imrcv.wav')
  const [playOpen] = useSound('/assets/sounds/dooropen.wav')
  const [playClose] = useSound('/assets/sounds/doorslam.wav')

  const { readyState, sendJsonMessage } = useWebSocket(
    user ? socketUrl : null,
    {
      // queryParams: {
      //   token: user ? user.token : ""
      // },
      onOpen: () => {
        console.log("Connected!");
      },
      onClose: () => {
        console.log("Disconnected!");
      },
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
            console.log(messageHistory);
            setHasMoreMessages(data.has_more);
            break;
          case "user_join":
            playOpen();
            setParticipants((pcpts) => {
              if (!pcpts.includes(data.user)) {
                const setGreeting = {
                  from_user: "Host", content: `${data.user} has joined the chat.`
                }
                if (messageHistory != undefined) {
                  setMessageHistory((prev) => [...prev, setGreeting]);
                  console.log(messageHistory)
                }
                return [...pcpts, data.user];
              }
              console.log('It was you joining - nothing changed')
              console.log(pcpts);
              return pcpts;
            });
            break;
          case "user_leave":
            playClose();
            setParticipants((pcpts) => {
              const setGreeting = { from_user: 'Host', content: `${data.user} has left the chat.` }
              setMessageHistory((prev) => [...prev, setGreeting])

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


  useEffect(() => {

    async function fetchMessages() {
      const apiRes = await fetch(
        `https://asl-back.herokuapp.com/messages/?conversation=${roomName}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Token ${user.token}`,
          },
        }
      );
      if (apiRes.status === 200) {
        const data = await apiRes.json();
        console.log(data.results[0])
        setHasMoreMessages(data.next !== null);
        setMessageHistory((prev) => [data.results[0], ...prev]);
        console.log('The messageHistory is:')
        console.log(messageHistory)
      }
    }
    fetchMessages()
  }, [])


  const handleSubmit = () => {
    let message = value;
    playSend();
    sendJsonMessage({
      type: "chat_message",
      message,
    });
    setValue("");
  }


  const handleDelete = async () => {
    confirm(`Are you sure you want to delete ${user.username}?`)
    const deletedUser = await userFunctions.deleteUrAccount(user);
    console.log(deletedUser)
  }

  const handleEdit = async () => {
    const newName = prompt(`What would you like your new name to be?`)
    const newUser = await userFunctions.changeUrName(user, newName);
    console.log(newUser)
  }

  useEffect(() => { playReceive() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [messageHistory])

  onkeydown = (e) => { if (e.charChode === 13) { handleSubmit } };



  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatCol}>
        <div className={styles.chatWindow}>
          {messageHistory.map((message, index) => (message && <ChatLine message={message} key={index} />))}
        </div>
        <div className={styles.chatModule}>
          <ReactQuill modules={modules} formats={formats} value={value} onChange={setValue} theme="snow" />
          <button className={styles.submitButton} onClick={() => { handleSubmit() }}>Send!</button>
        </div>
      </div>
      <div className={styles.buddyCol}>
        <Link href='/categories'>Go back to room selection</Link>
        {(pcpts.length === 1) ?
          <>
            <p className={styles.userList}>{pcpts.length} person here</p>
            <div className={styles.buddyList}>
              <ListBuddy user={pcpts[0]} key={0} />
            </div>
          </> :
          <>
            <p className={styles.userList}>{pcpts.length} people here</p>
            <div className={styles.buddyList}>
              {pcpts.map((user, index) => (<ListBuddy user={user} key={index} />))}
            </div>
          </>}
      </div>
      <div className={styles.linkBox}>
        <p>If you ever get pwned too badly, you have a choice:</p><Link className={styles.link} onClick={handleEdit} href='/login'>Change ur Name</Link><Link className={styles.link} onClick={handleDelete} href='/login'>Delete ur account</Link>
      </div>
    </div>
  )
}