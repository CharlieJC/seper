import React from "react";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";

import SEPractice from "./pages/SE-Practice"
import submissionPage from "./pages/submit"
import guide from "./pages/guide"

const App = () =>  {
    return (
        <Router>
        <div>
          <h1 className="text-center">Software Engineering Practice Evidence Repository (SEPER)</h1>
            <ul className="header">
                <li><NavLink to = "/SEPractice">Select the Practice</NavLink></li>
                <li><NavLink to = "/submit">Submit a Practice</NavLink></li>
                <li><NavLink to = "/guide">User Guide</NavLink></li>

            </ul>
          <div className="content">
            <Route  path="/SEPractice" component={SEPractice}/>
            <Route  path="/submit" component={submissionPage}/>
            <Route  path="/guide" component={guide}/>

          </div>
        </div>
        </Router>
    );
}
export default App;