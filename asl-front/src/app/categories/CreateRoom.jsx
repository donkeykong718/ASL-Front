'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './Categories.module.css';
import * as chatFunctions from '../api/services/chatrooms';

export default function CreateRoom(props) {
  const { finalCategoryList } = props
  const inputRef = useRef()
  const selectRef = useRef()


  const handleSubmit = (e) => {
    e.preventDefault()
    const inputRoomName = inputRef.current.value
    const selectNewRoomCategory = selectRef.current.value
    location.href = `/chat/${selectNewRoomCategory}/${inputRoomName}`
  }

  return (
    <>
      <div className={styles.createRoomDisplay} class="field-row-stacked" style={{ width: "200px" }}>
        <form className={styles.createRoomForm} onSubmit={handleSubmit}>
          <label className={styles.createRoomLabel} for="createRoomInput">Start Your Own Chat!</label>
          <input
            className={styles.createRoomInput}
            id="createRoomInput"
            type="text"
            ref={inputRef}
          />
          <select className={styles.createRoomCategoryDrop} ref={selectRef}>
            {finalCategoryList.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              )
            })}
          </select>
          <button className={styles.createRoomButton} type="submit">Create Room</button>
        </form>
      </div>
    </>
  )
}