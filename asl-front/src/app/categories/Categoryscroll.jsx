import React, { useState, useEffect, useRef } from "react";

export const CategoryScroll = (props) => {
  const { categoryChoice, categoryOption, finalCategoryList, setCategoryOption } = props;
  const onClick = (e) => {
    const value = e.target.value;
    setCategoryOption(value)
  }

  useEffect(() => {
    // console.log(categoryOption);
  }, [categoryOption])

  // const defaultOptions =
  //   [
  //     'Targaryen', 'Lannister', 'Stark', 'Baratheon', 'Tyrell',
  //   ];




  const categories = categoryChoice.length > 0 ? categoryChoice : finalCategoryList;

  return (
    <div className="category-scroll-display">
      <h3>Choose a category</h3>
      <div className="category-scroll-options">
        {categories.map(choice => {
          return (
            <button
              className="category-scroll-option"
              onClick={onClick}
              value={choice}
              type="button"
            >
              {choice}
            </button>
            // <option value={choice} className="category-scroll-option" onClick={onClick}>{choice}</option>
          )
        })}
      </div>
    </div>
  )
}