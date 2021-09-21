import React from "react";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";

import SEPractice from "./pages/SE-Practice"
const App = () =>  {
    return (
        <Router>
        <div>
          <h1 className="text-center">Software Engineering Practice Evidence Repository (SEPER)</h1>
            <ul className="header">
                <li><NavLink to = "/SEPractice">Select the Practice</NavLink></li>
            </ul>
          <div className="content">
            <Route  path="/SEPractice" component={SEPractice}/>
          </div>
        </div>
        </Router>
    );
}
export default App;