import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';


function ProfileButton({ setLogin }) {

  const dispatch = useDispatch()
  const [showMenu, setShowMenu] = useState(false)
  const history = useHistory()

  const openMenu = () => {
    if (showMenu) return
    setShowMenu(true)
  }

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  const logout = (e) => {
    e.preventDefault()
    dispatch(sessionActions.logout())
    setLogin(false)

    history.push('/')
  }

  return (
    <div onClick={openMenu}>
      <p>profile icon goes here</p>
      {showMenu &&
        <div>
          <div>Stories goes here</div>
          <div>user goes here</div>
          <button className="logout" onClick={logout}>Log Out</button>
        </div>
      }
    </div>
  )
}

export default ProfileButton
