import React, { useState, useEffect, useRef } from "react";
import { SearchbarDropdown } from './SearchbarDropdown'
import { CategoryScroll } from './Categoryscroll'
import { RoomList } from './Roomlist'


export default function Homepage() {
  const [options, setOptions] = useState([])
  const [categoryChoice, setCategoryChoice] = useState("")
  const [categoryOption, setCategoryOption] = useState("")

  const onInputChange = (e) => {
    const value = e.target.value
    setOptions(
      defaultOptions.filter(option =>
        option.toLowerCase().includes(value.toLowerCase()))
    )
  }


  // Simulated db
  const defaultOptions =
    [
      'Targaryen', 'Lannister', 'Stark', 'Baratheon', 'Tyrell',
    ];

  return (
    <div className="home-parent">
      <h3 className="home-search">Search Bar Dropdown</h3>
      <SearchbarDropdown
        options={options}
        onInputChange={onInputChange}
        categoryChoice={categoryChoice}
        setCategoryChoice={setCategoryChoice}
      />
      <button className="home-search-button">Search</button>
      <CategoryScroll
        categoryOption={categoryOption}
        setCategoryOption={setCategoryOption}
        categoryChoice={categoryChoice}
      />
      <RoomList categoryOption={categoryOption} />
    </div>
  )
}