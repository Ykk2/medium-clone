import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProfileButton from './ProfileButton'
import { Modal } from '../../context/Modal'
import LoginForm from '../LoginFormModal/LoginForm'
import SignUpForm from '../SignupFormModal/SignUpForm'
import './navigation.css'

function NavBar({ loaded }) {

    const sessionUser = useSelector(state => state.session.user)
    const [showModal, setShowModal] = useState(false)
    const [login, setLogin] = useState(true)
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <div className="navBar">
            <div className='logo' >
                <NavLink exact to='/'>
                    Logo goes here
                </NavLink>
            </div>
            <div >
                {loggedIn && loaded ?

                    <ProfileButton
                        user={sessionUser}
                        setLogin={setLogin}
                        setLoggedIn={setLoggedIn}
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
                        {login ? <LoginForm setShowModal={setShowModal} setLoggedIn={setLoggedIn} /> :
                            <SignUpForm setShowModal={setShowModal} setLoggedIn={setLoggedIn} />}
                    </Modal>
                }
            </div>
        </div>
    )

}

export default NavBar;
