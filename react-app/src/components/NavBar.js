// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { Modal } from '../context/Modal';
// import LoginForm from '../components/LoginFormModal';
// import SignupForm from '../components/SignupFormModal';
// // import LogoutButton from './auth/LogoutButton';

// const NavBar = ({ setShowModal, isLoaded }) => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <NavLink to='/' exact={true} activeClassName='active'>
//             Home
//           </NavLink>
//         </li>
//         {/* <li>
//           <NavLink to='/login' exact={true} activeClassName='active'>
//             Login
//           </NavLink>
//         </li> */}
//         <li>
//           <NavLink to='/login' exact={true} activeClassName='active'>
//             Sign In
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to='/signup' exact={true} activeClassName='active'>
//             Get started
//           </NavLink>
//         </li>
//         <div>
//           {isLoaded && <div>
//             <ProfileButton
//               user={sessionUser}
//               setLogin={setLogin}
//               setShowModal={setShowModal}
//             /> </div>}
//           {showModal && <Modal onClose={() => setShowModal(false)}>
//             {login ?
//               <LoginForm setShowModal={setShowModal} />
//               :
//               <SignupForm setShowModal={setShowModal} />}
//           </Modal>}
//         </div>
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Modal } from '../context/Modal';
import LoginForm from '../components/LoginFormModal';
import SignupForm from '../components/SignupFormModal';



function NavBar({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const [showModal, setShowModal] = useState(false)
  const [login, setLogin] = useState(true)

  return (
    <div className='navmaindiv'>
      <div id='navhomebutton'>
        <NavLink exact to="/">
        </NavLink>
      </div>
      <div className='becomehostandicon'>
        < div id='navloginsignup'>
          {showModal && <Modal onClose={() => setShowModal(false)}>
            {login ?
              <LoginForm setShowModal={setShowModal} />
              :
              <SignupForm setShowModal={setShowModal} />}
          </Modal>}
        </div>
      </div>
    </div >
  );


}


export default NavBar;
