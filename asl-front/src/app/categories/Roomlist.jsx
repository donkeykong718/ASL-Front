"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from './Categories.module.css';

export const RoomList = (props) => {
  const { categoryOption, finalCategoryList, conversation } = props;
  const buttonRefs = useRef([]);

  const onMouseEnter = (index) => {
    buttonRefs.current[index].classList.add(styles.highlighted);
  }

  const onMouseLeave = (index) => {
    buttonRefs.current[index].classList.remove(styles.highlighted);
  }

  const setButtons = () => {
    let buttons = null;
    if (categoryOption === "") {
      buttons = conversation.map((option, index) => {
        return (
          <tr key={option.id}>
            <button
              type="button"
              className={styles.roomButtons}
              onClick={() => { location.href = `/chat/${option.category}/${option.name}` }}
              ref={ref => buttonRefs.current[index] = ref}
              onMouseEnter={() => onMouseEnter(index)}
              onMouseLeave={() => onMouseLeave(index)}
            >
              {option.name}
            </button>
          </tr>
        );
      });
    } else {
      buttons = conversation
        .filter((option) => option.category === categoryOption)
        .map((option, index) => {
          return (
            <tr key={option.id}>
              <button
                type="button"
                className={styles.roomButtons}
                onClick={() => { location.href = `/chat/${option.category}/${option.name}` }}
                ref={ref => buttonRefs.current[index] = ref} // Set the ref for the button
                onMouseEnter={() => onMouseEnter(index)} // Pass the index to onMouseEnter
                onMouseLeave={() => onMouseLeave(index)} // Pass the index to onMouseLeave
              >
                {option.name}
              </button>
            </tr>
          )
        });
    }
    return buttons;
  }

  return (
    <div className={styles.roomListDisplay}>
      <h3 className={styles.roomListTitle}>Choose a room</h3>
      <div class="sunken-panel" style={{ height: '120px', width: '240px' }}>
        <table class="interactive">
          <thead>
            <tr>
              <th className={styles.roomListHeader}>
                {categoryOption ? `Rooms in ${categoryOption}` : "Pick a room:"}
              </th>
            </tr>
          </thead>
          <tbody>
            {setButtons()}
          </tbody>
        </table>
      </div>
    </div>
  )
}


