import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';
import './profileButton.css'

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
    <div className="profile-icon" onClick={openMenu}>
      <img className="profile-logo" src={require('./user_account.svg').default} alt='svgImage' />
      {showMenu &&
        <div className="profile-dropdown">
          <div>Stories</div>
          <div>Current User</div>
          <button className="logout" onClick={logout}>Log Out</button>
        </div>
      }
    </div>
  )
}

export default ProfileButton
