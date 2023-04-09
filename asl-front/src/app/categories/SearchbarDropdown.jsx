import React, { useState, useEffect, useRef } from "react";
import styles from './Categories.module.css'

export const SearchbarDropdown = (props) => {
  const { options, onInputChange, categoryChoice, finalCategoryList, setCategoryChoice } = props;
  const ulRef = useRef()
  const inputRef = useRef()
  const buttonRef = useRef([])

  const onSubmit = (e) => {
    e.preventDefault()
    const value = inputRef.current.value
    if (value) {
      setCategoryChoice(finalCategoryList.filter(option =>
        option.toLowerCase().includes(value.toLowerCase())))
    }
  }

  const onClick = (e, value) => {
    setCategoryChoice([value])
  }

  useEffect(() => {
    // console.log(categoryChoice);
  }, [categoryChoice])

  useEffect(() => {
    inputRef.current.addEventListener('click', e => {
      e.stopPropagation();
      if (ulRef.current) {
        ulRef.current.style.display = "flex"
      }
    })
    document.addEventListener('click', e => {
      if (ulRef.current) {
        ulRef.current.style.display = "none"
      }
    })
  }, []);


  return (
    <div className="search-bar-dropdown">
      <form onSubmit={onSubmit}>
        <div class="field-row-stacked" style={{ width: 200 }}>
          <label className={styles.searchBarLabel} for="searchBarField">Search All Chats by Topic:</label>
          <input
            className={styles.searchBarField}
            type="search"
            // placeholder="Search"
            ref={inputRef}
            onChange={onInputChange}
          />
        </div>
        <ul className={styles.searchBarList} ref={ulRef}>
          {options.map((option, index) => {
            buttonRef.current[index] = React.createRef()
            return (
              <button
                className={styles.searchBarListItem}
                type="submit"
                key={index}
                onClick={(e) => onClick(e, option)}
                ref={buttonRef.current[index]}
              >
                {option}
              </button>
            )
          })}
        </ul>
      </form>
    </div>
  )
}