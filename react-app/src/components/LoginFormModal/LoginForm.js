import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom"
import './LoginForm.css'

function LoginForm({ setShowModal, setLoggedIn }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [errorsShow, setErrorsShown] = useState(false);

  useEffect(() => {
    const validation = []
    if (!email.includes('@')) validation.push("Invalid email.")
    setErrors(validation)
  }, [email])

  if (sessionUser) return <Redirect to="/stories" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorsShown(true)

    if (!errors.length) {
      return dispatch(sessionActions.login({ email, password }))
        .then((res) => {
          if (res == null) return setShowModal(false)
          if (res.errors) setErrors(res.errors)
        })
        .catch(
          async (res) => {
            const data = await res.json();
            if (data && data.errors) {
              setErrors(data.errors)
            }
          }
        );
    };
  }
  const handleDemoUserSubmit = (e) => {

    e.preventDefault()
    return dispatch(sessionActions.login({ email: "demo@aa.io", password: 'password' }))
      .then(() => setShowModal(false))
      .catch(
        async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            return setErrors(data.errors)
          }

        }
      );
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1 className="login-header">Welcome Back.</h1>
      <ul className="login-errors">
        {errorsShow &&
          errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
      </ul>
      <label>
        <input id="login-input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
        />
      </label>
      <label>
        <input id="login-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder={"Password"}
        />
      </label>
      <button className="LoginButton" type="submit">Continue</button>
      <button className="DemoUserButton" onClick={handleDemoUserSubmit}>Demo User</button>
    </form>
  );
}

export default LoginForm;
