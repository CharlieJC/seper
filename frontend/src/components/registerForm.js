import {useHistory} from 'react-router';
import React, { useEffect } from 'react';

const RegisterForm = () => {

  const history = useHistory()


function handleRegister(e) {
  e.preventDefault()

  const form = e.target;
  const user = {
      username: form[0].value,
      password: form[1].value,
      role: form[2].value
  }

  fetch("api/register", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
  })
  }

  useEffect(() => {
      fetch("/api/isUserAuth", {
          headers: {
              "x-access-token": localStorage.getItem("token")
          }
      })
      .then(res => res.json())
      .then(data => data.isLoggedIn ? history.push("/"): null)
  })

  return (
    <div>
      <form onSubmit={event => handleRegister(event)}>
        <p>
          <input placeholder="Username" type="text"/>
        </p>
        <p>
          <input placeholder="Password" type="password" />
        </p>

        <p>
          <select>
            <option value="Visitor">Select your role...</option>
            <option value="Visitor">Visitor</option>
            <option value="Moderator">Moderator</option>
            <option value="Analyst">Analyst</option>
            <option value="Administator">Administator</option>
          </select>
        </p>

        <p>
          <input type="submit" />
        </p>
      </form>

        

    </div>
  );
};
export default RegisterForm;
