import React, { useState,useEffect, useContext } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import './NavBar.css';
import {Dropdown,Dropdown1} from '../Menu/Dropdown';
import {Button} from './Button';
import * as FaIcons from 'react-icons/fa'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [photoURL, setphotoURL] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setphotoURL(data.photoURL);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/sign-up");
    fetchUserName();
  }, [user, loading]);

    const handleClick = () => setClick(!click);
  const handleClick1 = () => {setClick(!click)};
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };
  
    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };
    const onMouseEnter1 = () => {
      if (window.innerWidth < 960) {
        setDropdown1(false);
      } else {
        setDropdown1(true);
      }
    };
  
    const onMouseLeave1 = () => {
      if (window.innerWidth < 960) {
        setDropdown1(false);
      } else {
        setDropdown1(false);
      }
    };
  
    return (
      <>
        <nav className='navbar'>
          <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
            SMART CAFE
            {/* <i class='fab fa-firstdraft' /> */}
          </NavLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li
              className='nav-item'
            onClick={handleClick1}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to='/menu'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Menu <i className='fas fa-caret-down' />
              </NavLink>
              {dropdown && <Dropdown />}
            </li>
            <li className='nav-item'>
              <NavLink
                to='/cafe'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Cafe
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/about-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </NavLink>
            </li>

            <li className="nav-item" 
          onClick={handleClick}
          onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}>
            <NavLink
              to={ user ? "/dashboard" : "/sign-up"}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              {user ?<img style={{height:"25px", width:"25px" , borderRadius: "30px"}} src={ photoURL } alt=""></img>: "SIGNUP "}
            </NavLink>
            {user && dropdown1 && <Dropdown1 />}
          </li>




            <li>
              <NavLink
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                <FaIcons.FaShoppingCart />
              </NavLink>
            </li>
          </ul>
          <Button />
        </nav>
      </>
    );
  }
  
  export default Navbar;