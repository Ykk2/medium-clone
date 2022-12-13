import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProfileButton from './ProfileButton'
import { Modal } from '../../context/Modal'
import LoginForm from '../LoginFormModal/LoginForm'
import SignUpForm from '../SignupFormModal/SignUpForm'
import './navigation.css'
import { combineReducers } from 'redux'
import Yoursvg from "../../assets/icons/diamond-store-svgrepo-com.svg"


function NavBar({ loaded }) {

    const sessionUser = useSelector(state => state.session.user)
    const [showModal, setShowModal] = useState(false)
    const [login, setLogin] = useState(true)

    return (
        <div className="navBar">
            <div className='logo' >
                <NavLink exact to={sessionUser ? '/stories' : '/'}>
                    <img src={"../../assets/icons/diamond-store-svgrepo-com.svg"}></img>
                </NavLink>
            </div>
            <div >
                {sessionUser ?
                    <ProfileButton
                        user={sessionUser}
                        setLogin={setLogin}
                    />
                    :
                    <div className='navBar-right'>
                        <div className='sign-in'>
                            <button onClick={() => {
                                setLogin(true)
                                setShowModal(true)
                            }}>Sign in</button>
                        </div>
                        <div >
                            <button className='get-started' onClick={() => {
                                setLogin(false)
                                setShowModal(true)
                            }}>Get started</button>
                        </div>
                    </div>
                }
                {
                    showModal &&
                    <Modal onClose={() => setShowModal(false)}>
                        {login ? <LoginForm setShowModal={setShowModal}  /> :
                            <SignUpForm setShowModal={setShowModal}/>}
                    </Modal>
                }
            </div>
        </div>
    )

}

export default NavBar;
