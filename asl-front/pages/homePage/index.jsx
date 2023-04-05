// import React, { useState, useEffect, useRef } from "react";

// // Search-bar-drop-down component

// const SearchbarDropdown = (props) => {
//   const { options, onInputChange, categoryChoice, setCategoryChoice } = props;
//   const ulRef = useRef()
//   const inputRef = useRef()
//   const buttonRef = useRef([])

//   const onSubmit = (e) => {
//     e.preventDefault()
//     const value = inputRef.current.value
//     if (value) {
//       setCategoryChoice(defaultOptions.filter(option =>
//         option.toLowerCase().includes(value.toLowerCase())))
//     }
//   }

//   const onClick = (e, value) => {
//     setCategoryChoice([value])
//   }

//   useEffect(() => {
//     console.log(categoryChoice);
//   }, [categoryChoice])

//   useEffect(() => {
//     inputRef.current.addEventListener('click', e => {
//       e.stopPropagation();
//       if (ulRef.current) {
//         ulRef.current.style.display = "flex"
//       }
//     })
//     document.addEventListener('click', e => {
//       if (ulRef.current) {
//         ulRef.current.style.display = "none"
//       }
//     })
//   }, []);


//   return (
//     <div className="search-bar-dropdown">
//       <form onSubmit={onSubmit}>
//         <input
//           className="search-bar-field"
//           type="search"
//           placeholder="Search"
//           ref={inputRef}
//           onChange={onInputChange}
//         />
//         <ul className="search-bar-list" ref={ulRef}>
//           {options.map((option, index) => {
//             buttonRef.current[index] = React.createRef()
//             return (
//               <button
//                 className="search-bar-list-item"
//                 type="submit"
//                 key={index}
//                 onClick={(e) => onClick(e, option)}
//                 ref={buttonRef.current[index]}
//               >
//                 {option}
//               </button>
//             )
//           })}
//         </ul>
//       </form>
//     </div>
//   )
// }

// // Simulated db
// const defaultOptions =
//   [
//     'Targaryen', 'Lannister', 'Stark', 'Baratheon', 'Tyrell',
//   ];


// // Category Component

// const CategoryScroll = (props) => {
//   const { categoryChoice, categoryOption, setCategoryOption } = props;
//   const onClick = (e) => {
//     const value = e.target.value;
//     setCategoryOption(value)
//   }

//   useEffect(() => {
//     // console.log(categoryOption);
//   }, [categoryOption])

//   const categories = categoryChoice.length > 0 ? categoryChoice : defaultOptions

//   return (
//     <div className="category-scroll-display">
//       {categories.map(choice => {
//         return (
//           <button
//             className="category-scroll-option"
//             onClick={onClick}
//             value={choice}
//             type="button"
//           >
//             {choice}
//           </button>
//         )
//       })}
//     </div>
//   )
// }

// // Room List Component

// export const RoomList = (props) => {
//   const { categoryOption } = props;

//   return (
//     <div className="room-list-display">
//       <h3>Choose a room</h3>
//       {categoryOption === "" && (
//         <>
//           <button type="button" className="Targaryen">Aemon</button>
//           <button type="button" className="Targaryen">Rhaegar</button>
//           <button type="button" className="Targaryen">Daenerys</button>
//           <button type="button" className="Lannister">Tyrion</button>
//           <button type="button" className="Lannister">Jaime</button>
//           <button type="button" className="Lannister">Cersei</button>
//           <button type="button" className="Stark">Jon</button>
//           <button type="button" className="Stark">Robb</button>
//           <button type="button" className="Stark">Sansa</button>
//           <button type="button" className="Baratheon">Robert</button>
//           <button type="button" className="Baratheon">Stannis</button>
//           <button type="button" className="Baratheon">Renly</button>
//           <button type="button" className="Tyrell">Margaery</button>
//           <button type="button" className="Tyrell">Loras</button>
//           <button type="button" className="Tyrell">Olenna</button>
//         </>
//       )}
//       {categoryOption === "Targaryen" && (
//         <>
//           <button type="button" className="Targaryen">Aemon</button>
//           <button type="button" className="Targaryen">Rhaegar</button>
//           <button type="button" className="Targaryen">Daenerys</button>
//         </>
//       )}
//       {categoryOption === "Lannister" && (
//         <>
//           <button type="button" className="Lannister">Tyrion</button>
//           <button type="button" className="Lannister">Jaime</button>
//           <button type="button" className="Lannister">Cersei</button>
//         </>
//       )}
//       {categoryOption === "Stark" && (
//         <>
//           <button type="button" className="Stark">Jon</button>
//           <button type="button" className="Stark">Robb</button>
//           <button type="button" className="Stark">Sansa</button>
//         </>
//       )}
//       {categoryOption === "Baratheon" && (
//         <>
//           <button type="button" className="Baratheon">Robert</button>
//           <button type="button" className="Baratheon">Stannis</button>
//           <button type="button" className="Baratheon">Renly</button>
//         </>
//       )}
//       {categoryOption === "Tyrell" && (
//         <>
//           <button type="button" className="Tyrell">Margaery</button>
//           <button type="button" className="Tyrell">Loras</button>
//           <button type="button" className="Tyrell">Olenna</button>
//         </>
//       )}
//     </div>
//   )
// };




// //Homepage component

// export default function Homepage() {
//   const [options, setOptions] = useState([])
//   const [categoryChoice, setCategoryChoice] = useState("")
//   const [categoryOption, setCategoryOption] = useState("")

//   const onInputChange = (e) => {
//     const value = e.target.value
//     setOptions(
//       defaultOptions.filter(option =>
//         option.toLowerCase().includes(value.toLowerCase()))
//     )
//   }

//   return (
//     <div className="home-parent">
//       <h3 className="home-search">Search Bar Dropdown</h3>
//       <SearchbarDropdown
//         options={options}
//         onInputChange={onInputChange}
//         categoryChoice={categoryChoice}
//         setCategoryChoice={setCategoryChoice}
//       />
//       <button className="home-search-button">Search</button>
//       <CategoryScroll
//         categoryOption={categoryOption}
//         setCategoryOption={setCategoryOption}
//         categoryChoice={categoryChoice}
//       />
//       <RoomList categoryOption={categoryOption} />
//     </div>
//   )
// }

import Homepage from "@/components/HomeComp/Homepage";

export default function ActualHomePage() {
  return (
    <>
      <Homepage />
    </>
  )
}