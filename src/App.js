import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { createContext } from "react/cjs/react.production.min";
import "./App.css";
import Blogs from "./components/Blogs/Blogs/Blogs";
import Contact from "./components/Contacts/Contact/Contact";
// import Contact from "./components/Contacts/Contact/Contact";
// import ContactUs from "./components/Contacts/ContactUs/ContactUs";
import Home from "./components/Home/Home/Home";
import Project from "./components/ProjectFolder/Project/Project";
// import Projects from "./components/ProjectFolder/Projects/Projects";
import Resume from "./components/Resume/Resume";



// export const UserContext = createContext();

function App() {
  // const [loggedInUser, setLoggedInUser] = useState({});
  return (
    // <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/projects">
            <Project></Project>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    // </UserContext.Provider>
  );
}


export default App;
