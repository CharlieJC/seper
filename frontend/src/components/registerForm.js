import {useHistory} from 'react-router';
import React, { useEffect } from 'react';

const RegisterForm = () => {

  const history = useHistory()


function handleLogin(e) {
  e.preventDefault()

  const form = e.target;
  const user = {
      username: form[0].value,
      password: form[1].value,
      role: "visitor"
  }

  console.log(form[2].value + " THIS IS THE VALUE")

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
      .then(data => data.isLoggedIn ? history.pushState("/"): null)
  })

  return (
    <div>
      <form onSubmit={event => handleLogin(event)}>
        <p>
          <input placeholder="Title" type="text"/>
        </p>
        <p>
          <input placeholder="Authors" type="text" />
        </p>

        <p>
          <select>
            <option value="Visitor">Select your role...</option>
            <option value="Visitor">Visitor</option>
            <option value="Moderator">Moderator</option>
            <option value="Analyst">Moderator</option>
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
