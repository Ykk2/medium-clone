import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';
import './profileButton.css'

function ProfileButton({ setLogin }) {
  const sessionUser = useSelector(state => state.session.user);
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
      <i style={{ fontSize: '35px', color: "rgb(29, 29, 29)" }} className="fa-regular fa-user" />
      {/* <img className="profile-logo" src={require('./user_account.svg').default} alt='svgImage' /> */}
      {showMenu &&
        <div className="profile-dropdown">
          <div className="dropdownItems">
            <div>
              <div id="profileUserEmail">
                {sessionUser.email}
              </div>
            </div>
          </div>
          <div className="dropdownItems">
            <NavLink id="profileItems" to="/profile">
              <i style={{ fontSize: "30px" }} className="fa-solid fa-book" />
            </NavLink>
            <NavLink id="profileItems" to="/profile">Profile</NavLink>
          </div>
          <div className="dropdownItems">
            <i id="logout" onClick={logout} style={{ fontSize: '30px' }} className="fa-solid fa-right-to-bracket" />
            <button id="logout" style={{ fontFamily: 'Helvetica' }} onClick={logout}>Log Out</button>
          </div>
        </div>
      }
    </div>
  )
}

export default ProfileButton
