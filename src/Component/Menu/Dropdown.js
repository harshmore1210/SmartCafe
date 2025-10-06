import React, { useState } from 'react';
import { MenuItems, MenuItems1 } from './MenuItems';
import './Dropdown.css';
import { NavLink } from 'react-router-dom';
import { logout } from "../../firebase";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export  {Dropdown};






function Dropdown1 (){
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  // const handleClick1 = () => {setClick(!click);
  // Logout();}

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems1.map((item, index) => {
          return (
            <>
            <li key={index}>
              <NavLink
                className={item.cName}
                to={item.path}
                onClick={() => {setClick(false);
                  logout()}}
              >
                {item.title}
              </NavLink>
            </li>
            </>
          );
        })}
        {/* <li onClick={setClick(false)}>
          <NavLink className="dropdown-link" to="/profile" >Profile</NavLink>
        </li>
        <li onClick={handleClick1}>
          <NavLink className="dropdown-link" to="/sign-up" >Profile</NavLink>
        </li> */}
      </ul>
    </>
  );
}

export {Dropdown1};