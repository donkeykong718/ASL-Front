'use client';

import React, { useState, useEffect, useContext } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Window from '../components/Window'
import * as chatServices from '../api/services/chatrooms'
import { UserContext } from '../context-provider';

export const RoomContext = React.createContext();

export default function ChatLayout({ children }) {

  const { user, setUser } = useContext(UserContext)

  const [room, setRoom] = useState('')
  const [rooms, setRooms] = useState([])

  const router = useRouter();
  const { name } = useParams();
  console.log(name);

  useEffect(() => {
    async function getAllRooms() {
      const roomList = await chatServices.getRooms()
      const roomArray = roomList.map(item => item.name)
      console.log(roomArray);
      if (roomArray.includes(name)) { setRoom(name) }
    }
    getAllRooms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>
      {children}
    </>
  )
}

// <RoomContext.Provider value={{ room, setRoom }}>
{/* <Window title={`ASL - ${room} Chat`}>{children}</Window> */ }
    // </RoomContext.Provider>