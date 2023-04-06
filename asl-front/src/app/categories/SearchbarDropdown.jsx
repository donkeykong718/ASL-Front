import React, { useState, useEffect, useRef } from "react";

export const SearchbarDropdown = (props) => {
  const { options, onInputChange, categoryChoice, setCategoryChoice } = props;
  const ulRef = useRef()
  const inputRef = useRef()
  const buttonRef = useRef([])

  const defaultOptions =
    [
      'Targaryen', 'Lannister', 'Stark', 'Baratheon', 'Tyrell',
    ];

  const onSubmit = (e) => {
    e.preventDefault()
    const value = inputRef.current.value
    if (value) {
      setCategoryChoice(defaultOptions.filter(option =>
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
        <input
          className="search-bar-field"
          type="search"
          placeholder="Search"
          ref={inputRef}
          onChange={onInputChange}
        />
        <ul className="search-bar-list" ref={ulRef}>
          {options.map((option, index) => {
            buttonRef.current[index] = React.createRef()
            return (
              <button
                className="search-bar-list-item"
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