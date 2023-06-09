'use client';

import React, { useState, useEffect, useContext } from 'react'
import { useParams, usePathname, useRouter } from 'next/navigation'
import Window from '../components/Window'
import * as chatServices from '../api/services/chatrooms'
import { UserContext } from '../ContextProvider';

export const RoomContext = React.createContext();
export const SocketContext = React.createContext();

export default function ChatLayout({ children }) {

  // const { user, setUser } = useContext(UserContext)



  const [room, setRoom] = useState('')
  const [rooms, setRooms] = useState([])

  const router = useRouter();
  const { category, name } = useParams();
  const [socketUrl, setSocketUrl] = useState('')
  console.log('category' + category)
  console.log('name' + name)
  // console.log("user token" + user.token)

  const pathname = usePathname();
  console.log(pathname)

  let socketStart = 'wss';

  if (typeof window !== 'undefined') {
    if (window.location.hostname === 'localhost') { socketStart = 'ws' }
  }

  useEffect(() => {
    const stringuser = localStorage.getItem('user')
    const user = JSON.parse(stringuser)
    setSocketUrl(`${socketStart}://asl-back.herokuapp.com/chats/${category}/${name}/?token=${user.token}`)
  }, [])

  console.log(name);

  useEffect(() => {
    async function getAllRooms() {
      const roomList = await chatServices.getRooms()
      const roomArray = roomList.map(item => item.name)
      console.log(roomArray)
      if (roomArray.includes(name)) { setRoom(name) }
    }
    getAllRooms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>
      {(socketUrl != '') ?
        <SocketContext.Provider value={{ socketUrl, setSocketUrl }}>
          <Window title={`ASL - ${decodeURI(name)} Chat`}>{children}</Window>
        </SocketContext.Provider> : <>Blank socket</>}
    </>
  )
}

// <RoomContext.Provider value={{ room, setRoom }}>

    // </RoomContext.Provider>