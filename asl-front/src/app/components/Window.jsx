import { AuthContext } from "../layout";
import { useContext, useState } from "react";

export default function Window({ children }) {

  const { auth, setAuth } = useContext(AuthContext);
  const [user, setUser] = useState({})

  //   if (typeof window !== 'undefined'){
  //   const stringUser = localStorage.getItem('user')
  //   const jsonUser = JSON.parse(stringUser)
  //   if (jsonUser) {
  //     const currentUser = jsonUser.username;
  //     console.log(currentUser)
  //     setUser(currentUser);
  //     // setAuth(true);
  //     // router.push('/home')
  //   }
  // }

  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">
          <img style={{ height: '1em', marginRight: '5px' }} src='assets/images/cool-man.png' />
          {/* Welcome to A/S/L. You are logged in as: {user} */}
        </div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="title-bar" style={{ background: '#c0bfbe', height: "1.25em" }}>
        {/* <img style={{ height: '1em', marginRight: '5px', display: 'inline' }} src='assets/images/cool-man.png' /> */}
        <ul className="title-bar-text" style={{ color: '#605e60', listStyle: 'none', display: 'flex' }}>
          <li ><span style={{ textDecoration: 'underline', marginLeft: '10px' }}>F</span>ile</li>
          <li><span style={{ textDecoration: 'underline', marginLeft: '10px' }}>E</span>dit</li>
          <li><span style={{ textDecoration: 'underline', marginLeft: '10px' }}>W</span>indow</li>
          <li><span style={{ textDecoration: 'underline', marginLeft: '10px' }}>S</span>ign Off</li>
          <li><span style={{ textDecoration: 'underline', marginLeft: '10px' }}>H</span>elp</li>
        </ul>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <img id='dummy-toolbar' src='/assets/images/dummy_toolbar.png' />
      <div className='window-body'>
        {/* <AuthContext.Provider value={{ auth, setAuth }}> */}
        {children}
        {/* </AuthContext.Provider> */}
      </div>
    </div>
  )
}