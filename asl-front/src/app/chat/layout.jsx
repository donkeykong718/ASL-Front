'use client';

import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Window from '../components/Window'
import * as chatServices from '../api/services/chatrooms'

export const RoomContext = React.createContext();

export default function Chatroom({ children }) {
  // const [user, setUser] = useState({})
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
  }, [])



  return (
    <RoomContext.Provider value={{ room, setRoom }}>
      <Window children={children} title={`ASL - ${room} Chat`} />
    </RoomContext.Provider>
  )
}