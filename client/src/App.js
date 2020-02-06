import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from "./pages/Home";
import Projects from "./pages/Projects";
import ContactPage from "./pages/Contact";

const Page404 = ({ location }) => (
  <div>
    <h2>404 :(</h2>
  </div>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/projects"} component={Projects} />
        <Route path={"/contact"} component={ContactPage} />
        <Route component={Page404} />
      </Switch>
    </Router>
    
  );
}

export default App;
