
import React, { useState, useEffect, useRef } from "react";

export const RoomList = (props) => {
  const { categoryOption, finalCategoryList, conversation } = props;

  // console.log(conversation);
  // console.log(categoryOption);

  const setButtons = () => {
    let buttons = null;
    if (categoryOption === "") {
      buttons = conversation.map((option) => {
        return (<button
          type="button"
          key={option.id}
          className={option.category}
        >{option.name}
        </button>);
      });
    } else {
      buttons = conversation
        .filter((option) => option.category === categoryOption)
        .map((option) => {
          return (<button
            type="button"
            key={option.id}
            className={option.category}
          >{option.name}
          </button>);
        });
    }
    return buttons;
  }

  return (
    <div className="room-list-display">
      <h3>Choose a room</h3>
      {setButtons()}
    </div>
  )
}


