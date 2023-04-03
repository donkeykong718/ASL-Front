// import React, { useMemo, useRef, useState } from 'react'

// export default function homePage() {
//   const [items, setItems] = useState([])
//   const [query, setQuery] = useState('')
//   const inputRef = useRef()

//   const filteredItems = useMemo(() => {
//     return items.filter(item => (
//       item.toLowerCase().includes(query.toLowerCase())
//     ))
//   }, [items, query])

//   function onSubmit(e) {
//     e.preventDefault()
//     const value = inputRef.current.value
//     if (value === "") return
//     setItems(prev =>
//       [...prev, value])
//     inputRef.current.value = ""
//   }

//   return (
//     <>
//       <h3>Search:</h3>
//       <input
//         value={query}
//         onChange={e => setQuery(e.target.value)}
//         placeholder="Search"
//         type="search" />
//       <br />
//       <br />
//       <form onSubmit={onSubmit}>
//         <h3>New Items:</h3>
//         <input ref={inputRef} type="text" />
//         <button type="submit">Add</button>
//       </form>
//       <h3>Items:</h3>
//       {filteredItems.map(item => (
//         <div>{item}</div>
//       ))}
//     </>
//   )
// }

import React, { useState, useEffect, useRef } from "react";


const SearchbarDropdown = (props) => {
  const { options, onInputChange } = props;
  const ulRef = useRef()
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.addEventListener('click', e => {
      e.stopPropagation();
      ulRef.current.style.display = "flex"
    })
    document.addEventListener('click', e => {
      ulRef.current.style.display = "none"
    })
  }, []);

  return (
    <div className="search-bar-dropdown">
      <input
        className="search-bar-field"
        type="search"
        placeholder="Search"
        ref={inputRef}
        onChange={onInputChange}
      />
      <ul className="search-bar-list" ref={ulRef}>
        {options.map((option, index) => {
          return (
            <button
              className="search-bar-list-item"
              type="button"
              key={index}
            >
              {option}
            </button>
          )
        })}
      </ul>
    </div>
  )
}

// Simulated db
const defaultOptions = [];
for (let i = 0; i < 10; i++) {
  defaultOptions.push(`Aegon ${i}`);
  defaultOptions.push(`Daeron ${i}`);
  defaultOptions.push(`Viserys ${i}`);
}

export default function Homepage() {
  const [options, setOptions] = useState([])

  const onInputChange = (e) => {
    const value = e.target.value
    setOptions(
      defaultOptions.filter(option =>
        option.toLowerCase().includes(value.toLowerCase()))
    )
  }

  return (
    <div className="home-parent">
      <h3 className="home-search">Search Bar Dropdown</h3>
      <SearchbarDropdown
        options={options}
        onInputChange={onInputChange}
      />
      <button className="home-search-button">Search</button>
    </div>
  )
}