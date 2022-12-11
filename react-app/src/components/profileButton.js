// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from 'react-router-dom';

function ProfileButton({ user, setLogin, setShowModal }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const history = useHistory()

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/')
    };

    return (
        <>
            <button className="menu-trigger" onClick={openMenu}>
                <img alt='Log in' src={icon}></img>
            </button>
            {showMenu && (user ?
                (<ul className="dropdown2">

                    <li id="loginmessage" >Welcome back {user.username}</li>
                    <li id="loginmessage" >{user.email}</li>
                    <li>
                        <button id="asdf" style={{}} onClick={logout}>Log Out</button>
                    </li>
                </ul>)
                :
                (<ul className="dropdown1">
                    <li >
                        <button id="asdf" onClick={() => {
                            setLogin(true)
                            setShowModal(true)
                        }}>Login</button>
                    </li>
                    <li >
                        <button id="asdf" onClick={() => {
                            setLogin(false)
                            setShowModal(true)
                        }}>Signup</button>
                    </li>
                </ul>)
            )}
        </>
    );
}



export default ProfileButton;
