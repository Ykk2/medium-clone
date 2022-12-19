// frontend/src/components/SignupFormPage/index.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignUpForm.css'


function SignupForm({ setShowModal }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [errorsShow, setErrorsShown] = useState(false);

  useEffect(() => {
    const validation = []
    if (!email.includes('@') || !email.includes(".")) validation.push("Invalid email.")
    if (password !== confirmPassword) validation.push("Passwords must match.")
    if (password.length < 8) validation.push("Password must be at least 8 characters.")
    if(!firstName) validation.push("First Name is required")
    if(!lastName) validation.push("Last Name is required")
    setErrors(validation)
  }, [email, confirmPassword])

  if (sessionUser) return <Redirect to="/stories" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorsShown(true)

    if (!errors.length && password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signUp(username, email, firstName, lastName, password))
        .then((res) => {

          if (res == null) return setShowModal(false)
          if (res) setErrors(res)
        })
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            setErrors(data.errors);
          }
        });
    }
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <h1>Join Medium.</h1>
      <ul className="sign-up-errors">
        {errorsShow &&
          errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label>
        <input id="signup-form-input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </label>
      <label>
        <input id="signup-form-input"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
      </label>
      <label>
        <input id="signup-form-input"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
      </label>
      <label>
        <input id="signup-form-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
      </label>
      <label>
        <input id="signup-form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </label>
      <label>
        <input id="signup-form-input"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />
      </label>
      <button className="signup-button" type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;
