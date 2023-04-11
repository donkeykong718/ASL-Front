'use client';

import React, { useState, useEffect, useRef } from "react";
import { SearchbarDropdown } from './SearchbarDropdown'
import { CategoryScroll } from './Categoryscroll'
import { RoomList } from './Roomlist'
import CreateRoom from './CreateRoom'
import * as chatFunctions from '../api/services/chatrooms'
import styles from './Categories.module.css'

export default function Homepage() {


  const [options, setOptions] = useState([])
  const [categoryChoice, setCategoryChoice] = useState([])
  const [categoryOption, setCategoryOption] = useState("")
  const [finalCategoryList, setfinalCategoryList] = useState([])
  const [conversation, setConversation] = useState([])

  const onInputChange = (e) => {
    const value = e.target.value
    setOptions(
      finalCategoryList.filter(option =>
        option.toLowerCase().includes(value.toLowerCase()))
    )
  }

  const onClick = () => {

  }

  useEffect(() => {
    const getAllRooms = async () => {
      try {
        const roomList = await chatFunctions.getRooms();
        const newRoomList = [...roomList]
        setConversation(newRoomList)
        let categoryList = [];
        roomList.forEach(room => {
          const { category } = room
          categoryList.push(category)
        })
        const uniqueCategories = [... new Set(categoryList)]
        setfinalCategoryList(uniqueCategories)
      } catch (error) {
        console.error(error);
      }
    }
    getAllRooms();
  }, []);

  useEffect(() => {
  }, [finalCategoryList, conversation])


  return (
    <div className="home-parent">
      <h3 className={styles.homeSearchTitle}>Chat Room Listings</h3>
      <SearchbarDropdown
        options={options}
        onInputChange={onInputChange}
        categoryChoice={categoryChoice}
        setCategoryChoice={setCategoryChoice}
        finalCategoryList={finalCategoryList}
      />
      <CategoryScroll
        categoryOption={categoryOption}
        setCategoryOption={setCategoryOption}
        categoryChoice={categoryChoice}
        finalCategoryList={finalCategoryList}
      />
      <RoomList
        categoryOption={categoryOption}
        finalCategoryList={finalCategoryList}
        conversation={conversation}
      />
      <CreateRoom
        finalCategoryList={finalCategoryList}
      />
    </div>
  )
}