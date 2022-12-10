
// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function LoginForm({ setShowModal }) {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const demo = (event) => {
        setCredential('Nhuts');
        setPassword('1password')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .then(() => setShowModal(false))
            .catch(
                async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                }
            );
    };

    return (
        <div className="signupform">
            <i id="signupxmark" className="fa-solid fa-xmark" onClick={() => setShowModal(false)} />
            <span id="useremailspan">Login</span>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <label>

                    <input id="signupinput" placeholder="Username or Email"
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    />
                </label>
                <label>

                    <input id="signupinput" placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <div className="longinsignupdiv">
                    <button id="loginsignupbutton" type="submit">Login</button>
                    <button id="loginsignupbutton" type="submit" onClick={demo}>Demo-User</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
