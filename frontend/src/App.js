import React, {useState, useEffect} from "react";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";

import SEPractice from "./pages/SE-Practice"
import submissionPage from "./pages/submit"
import guide from "./pages/guide"
import loginPage from "./pages/login"
import registerPage from "./pages/register"

const App = () =>  {
  const history = useHistory()
  const [username, setUsername] = useState(null)
  const [role, setRole] = useState(null)


  async function logout() {
    localStorage.removeItem("token")
    await history.push("/")
  }

  const setUserInfo = (data) => {
    setUsername(data.username)
    setRole(data.role)
    console.log(username)
    console.log(role)
  }

  useEffect(() => {
    fetch("/api/isUserAuth", {
        headers: {
            "x-access-token": localStorage.getItem("token")
        }
    })
    .then(res => res.json())
    .then(data => data.isLoggedIn ? setUserInfo(data): null)
})
    return (
        <Router>
        <div>
          <h1 className="text-center">Software Engineering Practice Evidence Repository (SEPER)</h1>
          
            <ul className="header">
                {(username, role) ? <span>Logged in, username: {username} role: {role} <a href="/" onClick={logout}>Logout</a></span> : null}
                <li><NavLink to = "/SEPractice">Select the Practice</NavLink></li>
                <li><NavLink to = "/submit">Submit a Practice</NavLink></li>
                <li><NavLink to = "/guide">User Guide</NavLink></li>
                <li><NavLink to = "/login">Login</NavLink></li>
                <li><NavLink to = "/register">Register</NavLink></li>

            </ul>
          <div className="content">
            <Route  path="/SEPractice" component={SEPractice}/>
            <Route  path="/submit" component={submissionPage}/>
            <Route  path="/guide" component={guide}/>
            <Route  path="/login" component={loginPage}/>
            <Route  path="/register" component={registerPage}/>
          </div>
        </div>
        </Router>
    );
}
export default App;