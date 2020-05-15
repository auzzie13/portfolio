import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastProvider } from "react-toast-notifications";
import "./App.css";
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";

const Page404 = ({ location }) => (
  <div>
    <h2>404 Error</h2>
  </div>
);

function App() {
  return (
    <ToastProvider>
      <Router>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/projects"} component={ProjectsPage} />
          <Route path={"/contact"} component={ContactPage} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </ToastProvider>
  );
}

export default App;
