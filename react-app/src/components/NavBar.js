import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal } from '../context/Modal';
import LoginForm from '../components/LoginFormModal';
import SignupForm from '../components/SignupFormModal';


function NavBar() {
  const [showModal, setShowModal] = useState(false)
  const [login, setLogin] = useState(true)

  return (
    <div>
      <div>
        <NavLink exact to="/"></NavLink>
      </div>
      <div>
        <button onClick={() => {
          setLogin(true)
          setShowModal(true)
        }}>Sign In</button>
        {login && showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <LoginForm setShowModal={setShowModal} />
          </Modal>
        )}
      </div>
      <div>
        <button onClick={() => {
          setLogin(false)
          setShowModal(true)
        }}>Get started</button>
        {!login && showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <SignupForm setShowModal={setShowModal} />
          </Modal>
        )}
      </div>
    </div>
  );
}


export default NavBar;
