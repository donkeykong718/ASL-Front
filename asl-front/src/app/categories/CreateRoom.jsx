'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './Categories.module.css';
import * as chatFunctions from '../api/services/chatrooms';

export default function CreateRoom(props) {
  const { finalCategoryList } = props
  const inputRef = useRef()
  const selectRef = useRef()

  // const createConversation = async (name, category) => {
  //   try {
  //     // const csrftoken = getCookie('csrftoken');
  //     const response = await chatFunctions.createRoom({
  //       headers: {
  //         'Content-Type': 'application/json',
  //         // 'X-CSRFToken': csrftoken,
  //         'Authorization': `Token ${localStorage.getItem('token')}`,
  //       },
  //       body: JSON.stringify({
  //         name,
  //         category,
  //       }),
  //     });
  //     console.log('Response status:', response.status);
  //     const responseBody = await response.text();
  //     console.log('Response body:', responseBody);
  //     if (!response.ok) {
  //       throw new Error('Failed to create conversation.');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };



  const handleSubmit = (e) => {
    e.preventDefault()
    const inputRoomName = inputRef.current.value
    const selectNewRoomCategory = selectRef.current.value
    // console.log("Input Room Name:", inputRoomName)
    // console.log("Selected Category:", selectNewRoomCategory)
    location.href = `/chat/${selectNewRoomCategory}/$${inputRoomName}`
  }



  return (
    <>
      <div className={styles.createRoomDisplay} class="field-row-stacked" style={{ width: "200px" }}>
        <form className={styles.createRoomForm} onSubmit={handleSubmit}>
          <label for="createRoomInput">Start Your Own Chat!</label>
          <input
            id="createRoomInput"
            type="text"
            ref={inputRef}
          />
          <select className='createRoomCategoryDrop' ref={selectRef}>
            {finalCategoryList.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              )
            })}
          </select>
          <button type="submit">Create Room</button>
        </form>
      </div>
    </>
  )
}