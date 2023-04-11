import React, { useState, useEffect, useRef } from "react";
import styles from './Categories.module.css'

export const SearchbarDropdown = (props) => {
  const { options, onInputChange, categoryChoice, finalCategoryList, setCategoryChoice } = props;
  const ulRef = useRef()
  const inputRef = useRef()
  const buttonRefs = useRef([])

  const onSubmit = (e) => {
    e.preventDefault()
    const value = inputRef.current.value
    if (value) {
      setCategoryChoice(finalCategoryList.filter(option =>
        option.toLowerCase().includes(value.toLowerCase())))
    }
  }

  // Press button and its value appears in the search bar
  const onClick = (e, value) => {
    setCategoryChoice([value])
    inputRef.current.value = value
  }

  const handleClick = () => {
    const value = inputRef.current.value
    if (value) {
      setCategoryChoice(finalCategoryList.filter(option =>
        option.toLowerCase().includes(value.toLowerCase())))
    }
  }

  const onMouseEnter = (index) => {
    buttonRefs.current[index].current.classList.add(styles.highlighted)
  }

  const onMouseLeave = (index) => {
    buttonRefs.current[index].current.classList.remove(styles.highlighted)
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
    <div className={styles.searchBarDropdown}>
      <form className={styles.searchBarForm} onSubmit={onSubmit}>
        <div class="field-row-stacked" style={{ width: 200 }}>
          <label className={styles.searchBarLabel} for="searchBarField">Search All Chats by Topic:</label>
          <input
            className={styles.searchBarField}
            type="search"
            ref={inputRef}
            onChange={onInputChange}
          />
        </div>
        <ul className={styles.searchBarList} ref={ulRef}>
          {options.map((option, index) => {
            buttonRefs.current[index] = React.createRef()
            return (
              <button
                className={styles.searchBarListItem}
                type="submit"
                key={index}
                onClick={(e) => onClick(e, option)}
                ref={buttonRefs.current[index]}
                onMouseEnter={() => onMouseEnter(index)}
                onMouseLeave={() => onMouseLeave(index)}
              >
                {option}
              </button>
            )
          })}
        </ul>
      </form>
      <button
        className={styles.homeSearchButton}
        onClick={handleClick}
      >Search</button>
    </div>
  )
}