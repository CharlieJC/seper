import {useHistory} from 'react-router';
import React, { useEffect } from 'react';

const LoginForm = () => {

const history = useHistory()

  
function handleLogin(e) {
    e.preventDefault()

    const form = e.target;
    const user = {
        username: form[0].value,
        password: form[1].value
    }

    fetch("api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("token", data.token)
        history.push("/")
        window.location.reload();
    })
    }
    
    useEffect(() => {
        fetch("/api/isUserAuth", {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
        .then(res => res.json())
        .then(data => data.isLoggedIn ? history.push("/"):null)
    })

  return (
    <div>
      <form onSubmit={event => handleLogin(event)}>
        <p>
          <input required placeholder="Username" type="text" />
        </p>
        <p>
          <input  prequired placeholder="Password" type="password" />
        </p>
        <p>
          <input type="submit" />
        </p>
      </form>
    </div>
  );
};
export default LoginForm;
