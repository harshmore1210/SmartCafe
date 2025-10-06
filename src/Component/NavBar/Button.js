import React from 'react';
import './Button.css';
import { NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
// import * as BsIcons from 'react-icons/bs'

export function Button() {
  return (
    <>
    {/* <NavLink to='sign-up'>
      <button className='btn'><BsIcons.BsFillPersonFill/></button>
    </NavLink> */}
    <NavLink to='cart'>
      <button className='btn1'><FaIcons.FaShoppingCart /></button>
    </NavLink>
    </>

  );
}