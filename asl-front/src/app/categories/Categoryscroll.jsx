import React, { useState, useEffect, useRef } from "react";
import styles from './Categories.module.css';

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
        <div class="sunken-panel" style={{ height: '120px', width: '240px' }}>
          <table class="interactive">
            <thead>
              <tr>
                <th className={styles.categoryHeader}>
                  Category
                </th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
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
          )
        })}
      </div>
    </div>
  )
}