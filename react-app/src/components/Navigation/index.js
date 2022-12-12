import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProfileButton from './ProfileButton'
import {Modal} from '../../context/Modal'
import LoginForm from '../LoginFormModal/LoginForm'
import SignUpForm from '../SignupFormModal/SignUpForm'


function NavBar({ loaded }) {

    const sessionUser = useSelector(state => state.session.user)
    const [showModal, setShowModal] = useState(false)
    const [login, setLogin] = useState(true)
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <>
            <ul className="navBar">
                <NavLink exact to='/'>
                    <div>
                        Logo goes here
                    </div>
                </NavLink>
            </ul>
            <div>
                {loggedIn && loaded ?

                        <ProfileButton
                            user ={sessionUser}
                            setLogin={setLogin}
                            setLoggedIn={setLoggedIn}
                            />


                    :
                        <div>

                        <button onClick={() => {
                            setLogin(true)
                            setShowModal(true)
                        }}>Log In</button>

                        <button onClick={() => {
                            setLogin(false)
                            setShowModal(true)
                        }}>Sign Up</button>

                        </div>
                    }

            </div>

            <div>
                {
                    showModal &&
                    <Modal onClose={() => setShowModal(false)}>
                        {login ? <LoginForm setShowModal={setShowModal} setLoggedIn={setLoggedIn}/> :
                                 <SignUpForm setShowModal={setShowModal} setLoggedIn={setLoggedIn}/>}
                    </Modal>
                }
            </div>

        </>
    )

}

export default NavBar;
