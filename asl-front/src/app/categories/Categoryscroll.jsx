import React, { useState, useEffect, useRef } from "react";
import styles from './Categories.module.css';

export const CategoryScroll = (props) => {
  const { categoryChoice, categoryOption, finalCategoryList, setCategoryOption } = props;
  const buttonRefs = useRef([]);

  const onClick = (e) => {
    const value = e.target.value;
    setCategoryOption(value)
  }

  useEffect(() => {
  }, [categoryOption])

  const onMouseEnter = (index) => {
    buttonRefs.current[index].classList.add(styles.highlighted);
  }

  const onMouseLeave = (index) => {
    buttonRefs.current[index].classList.remove(styles.highlighted);
  }

  const categories = categoryChoice.length > 0 ? categoryChoice : finalCategoryList;

  return (
    <div className={styles.categoryScrollDisplay}>
      <h3 className={styles.categoryScrollTitle}>Choose a category</h3>
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
              {categories.map((choice, index) => {
                return (
                  <tr key={index}>
                    <button
                      className={styles.categoryScrollOptions}
                      onClick={onClick}
                      value={choice}
                      type="button"
                      ref={ref => buttonRefs.current[index] = ref}
                      onMouseEnter={() => onMouseEnter(index)}
                      onMouseLeave={() => onMouseLeave(index)}
                    >
                      {choice}
                    </button>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}