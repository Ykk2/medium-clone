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

    return (
        <div className="navBar">
            <div className='navBar-left' >
                <NavLink className="navBar-left-inner" exact to={sessionUser ? '/stories' : '/'}>
                    <img className="logo" src={require('./diamond-store-svgrepo-com.svg').default} alt='svgImage'/>
                    <p className="logo-title">Hard</p>
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
                        <div>
                            <button className='sign-in' onClick={() => {
                                setLogin(true)
                                setShowModal(true)
                            }}>Sign In</button>
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
