import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";


function LoginForm({setShowModal, setLoggedIn}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    return dispatch(sessionActions.login({ email, password }))
    .then(() => setShowModal(false))
    .catch(
      async (res) => {

        const data = await res.json();

        if (data && data.errors) setErrors(data.errors);

      }
    ).then(()=> setLoggedIn(true));
  };

  const handleDemoUserSubmit = (e) => {

    e.preventDefault()
    return dispatch(sessionActions.login({ email:"demo@aa.io", password:'password'}))
    .then(() => setShowModal(false))
    .catch(
      async (res) => {

        const data = await res.json();

        if (data && data.errors) return setErrors(data.errors)

      }
    ).then(()=> setLoggedIn(true));
  };

  return (
    <form onSubmit={handleSubmit}>
      <span className="login-header">Login</span>
      <ul className="login-errors">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Username or Email"
        />
      </label>
      <label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder={"Password"}
        />
      </label>
      <button className="LoginButton" type="submit">Continue</button>
      <button className="DemoUserButton" onClick={handleDemoUserSubmit}>Login as Demo User</button>
    </form>
  );
}

export default LoginForm;
